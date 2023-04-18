import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {

  //form group
  addEmp!: FormGroup;

  constructor ( private breadcrumb: BreadcrumbService, private fb: FormBuilder, private fs: AngularFirestore) {
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

  //login form submission
  submitForm(){
    
    let empData = this.addEmp.value
    this.fs.collection('employees').add(empData).then(ref => {
      console.log(ref)
    }).catch(err => {
      console.log(err)
    })
  }

}
