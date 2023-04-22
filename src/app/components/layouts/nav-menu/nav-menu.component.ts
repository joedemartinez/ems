import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeesService } from 'src/app/services/employees.service';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  date = new Date()
  todayDate:String =this.date.toUTCString()
  userEmail: any
  
  constructor(private login: LoginServiceService, private empService: EmployeesService,){
  }

  ngOnInit(): void {
    this.empService.countEmp().subscribe((count) => {
      ///set email on menu
      this.userEmail = localStorage.getItem('user')
    })
  }

  logout(){
    this.login.logout();
  }
}
