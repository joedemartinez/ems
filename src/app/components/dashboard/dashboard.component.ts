import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { BreadcrumbComponent } from '../layouts/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor ( private breadcrumb: BreadcrumbService) {
    this.breadcrumb.setPageDetails('Dashboard','','','')
  }

}
