import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userData: any //any

  constructor ( private breadcrumb: BreadcrumbService, private userService: UsersService) {
    this.breadcrumb.setPageDetails('Users','Users','/users','')

  }

  ngOnInit(): void {
    this.userService.loadUserDetails()
    // .subscribe(res => {
    //   // console.log(res)
    //   this.userData = res
    //  // console.log(this.empData) 
    //   //$(document).ready(() => {

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
      

    // })
  }

}
