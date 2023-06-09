import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/layouts/nav-menu/nav-menu.component';
import { NavBarComponent } from './components/layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environments.prod';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeesComponent } from './components/employees/add-employees/add-employees.component';
import { BreadcrumbComponent } from './components/layouts/breadcrumb/breadcrumb.component'

import { DataTablesModule } from 'angular-datatables';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AddDepartmentsComponent } from './components/departments/add-departments/add-departments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageDepartmentsComponent } from './components/departments/manage-departments/manage-departments.component';
import { ManageEmployeesComponent } from './components/employees/manage-employees/manage-employees.component';
import { ManagersComponent } from './components/managers/managers.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    EmployeesComponent,
    AddEmployeesComponent,
    BreadcrumbComponent,
    DepartmentsComponent,
    AddDepartmentsComponent,
    ManageDepartmentsComponent,
    ManageEmployeesComponent,
    ManagersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    DataTablesModule,
    NgbModule
    // AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
