import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  constructor ( private breadcrumb: BreadcrumbService) {
    this.breadcrumb.setPageDetails('Employees','Employees','/employees','')
  }

}
