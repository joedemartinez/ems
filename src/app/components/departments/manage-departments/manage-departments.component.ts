import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { AddDepartmentsComponent } from '../add-departments/add-departments.component';

@Component({
  selector: 'app-manage-departments',
  templateUrl: './manage-departments.component.html',
  styleUrls: ['./manage-departments.component.css']
})
export class ManageDepartmentsComponent {

  deptData: any

  constructor ( private breadcrumb: BreadcrumbService, private deptService: DepartmentsService, private modal: NgbModal) {
    this.breadcrumb.setPageDetails('Departments','Departments','/departments','Manage Department')

  }

  openModal(){
    this.modal.open(AddDepartmentsComponent, { backdrop: false })
  }

  ngOnInit(): void {
    this.deptService.loadDeptDetails().subscribe(res => {
      // console.log(res)
      this.deptData = res
     // console.log(this.empData) 
      //$(document).ready(() => {

      setTimeout(()=>{
        $('#example1').DataTable( {
          pagingType: 'simple_numbers',
          dom: '<"clear">lBfrtip',
          // dom: '<B<"clear">liflp',
          pageLength: 10,
          searching: true,
          processing: true,
          lengthMenu : [5, 10, 25],
          stateSave: true,
          destroy: true
        });
      }, 2);
      // 
    })

  }

  editDept(){
    this.openModal()
  }

  deleteDept(id){
    this.deptService.deleteDept(id)
  }
  

}
