import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  date = new Date()
  todayDate:String =this.date.toUTCString()

  isLoggedIn$!: Observable<boolean>
  loggedIn!: any
  
  constructor(private login: LoginServiceService){
  }

  ngOnInit(): void {

      this.loggedIn = localStorage.getItem('loggedIn')
      if(this.loggedIn){
        this.isLoggedIn$ = of(this.loggedIn ==='true')
      }
      else{
        this.isLoggedIn$ = this.login.isLoggedIn()
      }
    
  }
}
