import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';

import { EmployeesService } from 'src/app/services/employees.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  empData!: Array<object>
    
  constructor ( private breadcrumb: BreadcrumbService, private empService: EmployeesService) {
    this.breadcrumb.setPageDetails('Employees','Employees','/employees','')

  }
  
  ngOnInit(): void {
    this.empService.loadEmpDetails().subscribe(res => {
      console.log(res)
      this.empData = res
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
      }, 1);

    })

  }
  

}
