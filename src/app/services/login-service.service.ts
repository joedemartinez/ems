import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  //behaviour var
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  guardVal: boolean = false
  users: any

  constructor(private loginAuth: AngularFireAuth, private router: Router,private toastr: ToastrService) { }

  login(email:string, password:string){
    this.loginAuth.signInWithEmailAndPassword(email, password)
    .then(logRef => {
      // this.toastr.success('You have successfully logged in')
      // console.log('success')
      this.loadUser()
      this.loggedIn.next(true) //logged in
      localStorage.setItem('loggedIn', 'true') // set storage val
      this.guardVal = true // guard val
      this.isLoggedIn()
      this.toastr.success('You Have Logged In Successfully', 'Success!');
      this.router.navigate(['/dashboard'])
      
      this.loginAuth.user
      
    })
    .catch(err => {
      console.log(err)
      this.toastr.warning('Opps! Error Occurred', 'Warning!');
      this.router.navigate(['/login'])
      
    })
    }
 
  // load user details lastLoginAt
  loadUser(){
    this.loginAuth.authState.subscribe(user => {
      //storing user email in local storage
      localStorage.setItem('user', user?.email  ? user?.email  :  '') //considering undefined val
    })
  }

  //logout
  logout(){
    this.loginAuth.signOut().then(() =>{
      this.loggedIn.next(false) //
      localStorage.clear()
      this.guardVal = false //set guardß
      this.isLoggedIn() //calling func
      this.toastr.success('You Have Logged Out Successfully', 'Success!');
      this.router.navigate(['/login'])
    }).catch((e) => {
      console.log(e)
      this.toastr.warning('Opps! Error Occurred', 'Warning!');
      this.router.navigate(['/login'])
    })
  }

  //function to check if user is logged in
  isLoggedIn(){
    return this.loggedIn.asObservable(); //returning as observable
  }
}
