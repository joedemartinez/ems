import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent {

  //form group
  addDept!: FormGroup;

  constructor ( private breadcrumb: BreadcrumbService, private fb: FormBuilder, private modal: NgbModal, private deptService: DepartmentsService) {
    this.breadcrumb.setPageDetails('Add Employees','Employees','/employees','Add Employees')

    //set validations
    this.addDept = this.fb.group({
      dept_code: ['', [Validators.required]],
      dept_name: ['', [Validators.required]],
      dept_head: ['', [Validators.required]]
    })
  }

  closeModal(){
    this.modal.dismissAll();
  }

  submitForm(){
    this.deptService.submitForm(this.addDept)
    this.closeModal()
  }

}
