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
  
  constructor(private login: LoginServiceService){
  }

  ngOnInit(): void {
    
  }

  logout(){
    this.login.logout();
  }
}
