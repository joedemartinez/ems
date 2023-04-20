import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { BreadcrumbComponent } from '../layouts/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  countEmp: any
  countDept: any

  constructor ( private breadcrumb: BreadcrumbService,
    private empService: EmployeesService,
    private deptService: DepartmentsService) {
    this.breadcrumb.setPageDetails('Dashboard','','','')
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

  }



}
