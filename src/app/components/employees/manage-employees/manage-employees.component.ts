import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { AddEmployeesComponent } from '../add-employees/add-employees.component';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent {

  empData: any // load data into the table

    
  constructor ( private breadcrumb: BreadcrumbService, private fb: FormBuilder, private empService: EmployeesService, private modal: NgbModal) {
    this.breadcrumb.setPageDetails('Manage Employees','Employees','/employees','Manage Employees')

  }

  openModal(){
    this.modal.open(AddEmployeesComponent, { backdrop: false, size: 'lg' })
  }
  
  ngOnInit(): void {
    this.empService.loadEmpDetails().subscribe(res => {
      // console.log(res)
      this.empData = res
     // console.log(this.empData) 
      // setTimeout(()=>{   
      //     $('#example1').DataTable( {
      //       pagingType: 'simple_numbers',
      //       dom: '<"clear">lBfrtip',
      //       // dom: '<B<"clear">liflp',
      //       pageLength: 10,
      //       searching: true,
      //       processing: true,
      //       lengthMenu : [5, 10, 25],
      //   } );
      // }, 0);

      setTimeout(()=>{
        $('#example1').DataTable( {
          pagingType: 'simple_numbers',
          dom: '<"clear">lBfrtip',
          // dom: '<B<"clear">liflp',
          pageLength: 10,
          searching: true,
          processing: true,
          lengthMenu : [5, 10, 25],
          destroy: true //stop multiple initialzation
        } );
      });
    })

  }


  editEmp(){
    this.openModal()
  }

  deleteEmp(id){
    this.empService.deleteEmp(id)
  }

}
