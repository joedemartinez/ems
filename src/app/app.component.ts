import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn$!: any
  loggedIn!: any
  constructor( private login: LoginServiceService){}  

  ngOnInit():void{
    //console.log(this.login.isLoggedIn())
    //localStorage.getItem('loggedIn') ? localStorage.getItem('loggedIn') :
    this.loggedIn = localStorage.getItem('loggedIn')
    if(this.loggedIn){
      this.isLoggedIn$ = this.loggedIn ==='true'
    }
    else{
      this.isLoggedIn$ = this.login.isLoggedIn()
    }
    // this.login.loggedIn.subscribe(console.log)
    console.log(this.isLoggedIn$)
  }
}
