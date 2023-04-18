import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  userEmail!: string | null;
  isLoggedIn$!: Observable<boolean>
  loggedIn!: any
  
  constructor(private login: LoginServiceService){
  }

  ngOnInit(): void {
      this.userEmail = localStorage.getItem('user')
      // console.log(localStorage.getItem('user')+' ngOninit')

      this.loggedIn = localStorage.getItem('loggedIn')
      if(this.loggedIn){
        this.isLoggedIn$ = of(this.loggedIn ==='true')
      }
      else{
        this.isLoggedIn$ = this.login.isLoggedIn()
      }
    
  }

  logout(){
    this.login.logout();
  }
}
