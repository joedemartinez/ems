import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent {

  //form group
  addEmp!: FormGroup;

  modalData!: any

  deptData: any

  id:any


  constructor (
    private fb: FormBuilder, 
    private empService: EmployeesService, 
    private deptService: DepartmentsService, 
    private modal: NgbModal,
    private route: ActivatedRoute,
    private router: Router) {

    //EDIT MODAL
    //get id from url
    this.route.queryParams.subscribe(params => {
       this.id = params['id'];// geting id
      
      if (this.id != 0) {
        this.empService.loadEmpDetail(this.id).subscribe( res => {
          this.modalData = res //setting result to modalData variable
          //set validations
          this.addEmp = this.fb.group({ //set data into fields
            email: [this.modalData.email, [Validators.required, Validators.email]],
            fullname: [this.modalData.fullname, [Validators.required]],
            position: [this.modalData.position, [Validators.required]],
            phoneno: [this.modalData.phoneno, [Validators.required]],
            salary: [this.modalData.salary, [Validators.required, Validators.min(701)]],
            hire_date: [this.modalData.hire_date, [Validators.required]],
            dept_id: [this.modalData.dept_id, [Validators.required]]
          })
        })
      } 
      
    });


    //NEW EMPLOYEE MODAL
    //set validations
    this.addEmp = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', [Validators.required]],
      position: ['', [Validators.required]],
      phoneno: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(701)]],
      hire_date: ['', [Validators.required]],
      dept_id: ['', [Validators.required]]
    })

  }

  submitForm(){
    // this.empService.submitForm(this.addEmp)
    //check if edit or save modal
    if (this.id) { //edit
      this.empService.updateEmpDetail(this.id, this.addEmp.value)
      this.closeModal()
    } else { // save
      this.empService.submitForm(this.addEmp)
      this.closeModal()
    }
  }

  ngOnInit(): void {
    this.deptService.loadDeptDetails().subscribe(res => {
      this.deptData = res
    })
  }

  closeModal(){
    this.modal.dismissAll();
    this.router.navigate(['/manage-employees'])
  }

}
