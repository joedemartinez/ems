import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  userEmail!: string | null;
  countEmp: any
  countDept: any
  
  constructor(private login: LoginServiceService, 
    private empService: EmployeesService,
    private deptService: DepartmentsService){
  }

  ngOnInit(): void {
    //set emp count
    this.empService.countEmp().subscribe((count) => {
      this.countEmp = count
      // console.log(count)//

       ///set email on navbar
       this.userEmail = localStorage.getItem('user')
    })
    //set dept count
    this.deptService.countDept().subscribe((count) => {
      this.countDept = count
      // console.log(count)//
    })

    
  }
  

  logout(){
    this.login.logout();
  }
}
