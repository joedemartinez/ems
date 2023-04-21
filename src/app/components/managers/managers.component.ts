import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent {

  deptData: any //any

  constructor ( private breadcrumb: BreadcrumbService, private deptService: DepartmentsService) {
    this.breadcrumb.setPageDetails('Managers','Employees','/employees','Managers')

  }

  ngOnInit(): void {
    this.deptService.getManagers().subscribe(res => {
      console.log(res)
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
          destroy: true
        } );
      });
      

    })

  }

}
