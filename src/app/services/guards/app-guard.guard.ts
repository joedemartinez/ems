import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {

  constructor ( private login: LoginServiceService, private route: Router){}

  loggedIn:string | null = localStorage.getItem('loggedIn')

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // guard logic
      if (this.login.guardVal || this.loggedIn === 'true') {
        // console.log('Access Granted...' )
        return true //user logged in
      }else{
        // console.log('Access Denied...')
        this.route.navigate(['/login'])
        return false //user logged out
      }
  }
  
}
