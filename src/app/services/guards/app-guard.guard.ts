import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {

  constructor ( private login: LoginServiceService, private route: Router){}

  loggedIn1:string | null = localStorage.getItem('loggedIn')
  loggedIn: any

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // guard logic
      //setting logged in value
      this.login.isLoggedIn().subscribe(user => {
        this.loggedIn = this.loggedIn1 === 'true'
        // console.log(this.loggedIn1 )
      })

      if (this.loggedIn ) {
        // console.log(this.loggedIn +'true app')
        return true//user logged in
      } else {
        // console.log(this.loggedIn +'false app')
        this.route.navigate(['/login'])
        return false //user logged out
      }
      
      // if (this.login.guardVal || this.loggedIn === 'true') {
      //   // console.log(this.login.guardVal )
      //   return true //user logged in
      // }else{
      //   // console.log('Access Denied...')
      //   this.route.navigate(['/login'])
      //   return false //user logged out
      // }
  }
  
}
