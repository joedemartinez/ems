import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor( private login: LoginServiceService, private route: Router){}

  loggedIn:string | null = localStorage.getItem('loggedIn')

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.login.guardVal) {
      this.route.navigate(['/dashboard'])
      // console.log('Access Denied...' )
      return false //user logged in
    }else{
      // console.log('Access Granted...')
      return true //user logged out
    }
  }
  
}
