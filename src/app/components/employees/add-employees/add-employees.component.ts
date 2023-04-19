import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {

  //form group
  addEmp!: FormGroup;

  constructor ( private breadcrumb: BreadcrumbService, private fb: FormBuilder, private empService: EmployeesService) {
    this.breadcrumb.setPageDetails('Add Employees','Employees','/employees','Add Employees')

    //set validations
    this.addEmp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', [Validators.required]],
      position: ['', [Validators.required]],
      phoneno: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(701)]],
      hire_date: ['', [Validators.required]]
    })
  }

  submitForm(){
    this.empService.submitForm(this.addEmp)
  }

}
