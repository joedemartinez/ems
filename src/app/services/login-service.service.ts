import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  //behaviour var
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private loginAuth: AngularFireAuth, private router: Router) { }

  login(email:string, password:string){
    this.loginAuth.signInWithEmailAndPassword(email, password)
    .then(logRef => {
      // this.toastr.success('You have successfully logged in')
      console.log('success')
      this.loadUser()
      this.loggedIn.next(true) //logged in
      localStorage.setItem('loggedIn', 'true')
      this.router.navigate(['/dashboard'])
    })
    .catch(err => {
      // this.toastr.warning('Account do not exist!! See Admin')
      console.log('error')
    })
    }
 
  // load user details lastLoginAt
  loadUser(){
    this.loginAuth.authState.subscribe(user => {
      // console.log(JSON.parse(JSON.stringify(user)))
      // localStorage.setItem('id', JSON.parse(JSON.stringify(user?.uid)))
      localStorage.setItem('user', JSON.parse(JSON.stringify(user?.email)))
      // localStorage.setItem('user', user?.lastLoginAt)
    })
  }

  //logout
  logout(){
    this.loginAuth.signOut().then(() =>{
      console.log('User Logged Out Successfully')
      this.loggedIn.next(false) //
      localStorage.clear()
      this.router.navigate(['/'])
    }).catch((e) => {
      console.log(e)
    })
  }

  //function to check if user is logged in
  isLoggedIn(){
    return this.loggedIn.getValue();
  }
}
