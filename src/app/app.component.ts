import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private login:LoginServiceService) {}

  loginVal: any
  local = localStorage.getItem('loggedIn')
  title = 'adminLte'

  ngOnInit():void{
      //setting logged in value
      this.login.isLoggedIn().subscribe(user => {
        this.loginVal = user
      })

  }

  ngAfterViewInit(): void{
    //setting logged in value 
      if(this.local){
       this.loginVal = true
      }else{
        this.loginVal = false
      }
    // console.log(this.loginVal)

  }

}
