import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  userEmail: any;
  constructor(private login: LoginServiceService){}

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('user')
  }

  logout(){
    this.login.logout();
  }
}
