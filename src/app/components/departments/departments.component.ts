import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { AddDepartmentsComponent } from './add-departments/add-departments.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit { 

  deptData: any

  constructor ( private breadcrumb: BreadcrumbService, private deptService: DepartmentsService, private modal: NgbModal) {
    this.breadcrumb.setPageDetails('Departments','Department Details','/departments','')

  }

  openModal(){
    this.modal.open(AddDepartmentsComponent, { backdrop: false })
  }

  ngOnInit(): void {
    this.deptService.loadDeptDetails().subscribe(res => {
      // console.log(res)
      this.deptData = res
     // console.log(this.empData) 
      setTimeout(()=>{   
          $('#example1').DataTable( {
            pagingType: 'simple_numbers',
            dom: '<"clear">lBfrtip',
            // dom: '<B<"clear">liflp',
            pageLength: 10,
            searching: true,
            processing: true,
            lengthMenu : [5, 10, 25],
        } );
      }, 0);

    })

  }
}
