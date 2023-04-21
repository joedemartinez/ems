import { Component, OnInit } from '@angular/core';
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
  isLoggedIn$!: Observable<boolean>
  loggedIn!: any
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
    })
    //set dept count
    this.deptService.countDept().subscribe((count) => {
      this.countDept = count
      // console.log(count)//
    })

      ///set local storage
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
