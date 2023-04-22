import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( private login: LoginServiceService, private route: Router){}

  loggedIn1:string | null = localStorage.getItem('loggedIn')
  loggedIn: any

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.login.isLoggedIn().subscribe(user => {
      this.loggedIn = this.loggedIn1 === 'true'
      // console.log(this.loggedIn1 )
    })

    if (this.loggedIn ) {
      // console.log(this.loggedIn +'true log')
      return false //user logged in
    } else {
      // console.log(this.loggedIn +'false log')
      return true //user logged out
    }

    // if (this.login.guardVal || this.loggedIn === 'true') {
    //   this.route.navigate(['/dashboard'])
    //   console.log(this.login.guardVal, this.loggedIn)
    //   return false //user logged in
    // }else{
    //   // console.log('Access Granted...')
    //   console.log(this.login.guardVal, this.loggedIn)
    //   return true //user logged out
    // }
  }
  
}
