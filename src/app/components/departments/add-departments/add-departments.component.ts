import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  //form group
  addDept!: FormGroup;

  empData: any

  modalData!: any

  id:any

  constructor ( 
    private fb: FormBuilder, private modal: NgbModal, 
    private deptService: DepartmentsService, 
    private empService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute,) {


    //EDIT MODAL
    //get id from url
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];// geting id
     
     if (this.id != 0) {
       this.deptService.loadDeptDetail(this.id).subscribe( res => {
         this.modalData = res //setting result to modalData variable
         //set validations
         this.addDept = this.fb.group({
          dept_code: [this.modalData.dept_code, [Validators.required]],
          dept_name: [this.modalData.dept_name, [Validators.required]],
          dept_head: [this.modalData.dept_head, [Validators.required]]
         })
       })
     } 
     
   });

   //NEW DEPARTMENT MODAL
    //set validations
    this.addDept = this.fb.group({
      dept_code: ['', [Validators.required]],
      dept_name: ['', [Validators.required]],
      dept_head: ['', [Validators.required]]
    })
  }

  closeModal(){
    this.modal.dismissAll();
    this.router.navigate(['/manage-departments'])
  }

  submitForm(){
    // this.deptService.submitForm(this.addDept)
     //check if edit or save modal
     if (this.id) { //edit
      this.deptService.updateDeptDetail(this.id, this.addDept.value)
      this.closeModal()
    } else { // save
      this.deptService.submitForm(this.addDept)
      this.closeModal()
    }
    this.closeModal()
  }

  ngOnInit(): void {
    //setting emp details
    this.empService.loadEmpDetails().subscribe(res => {
      this.empData = res
    })


  }

}
