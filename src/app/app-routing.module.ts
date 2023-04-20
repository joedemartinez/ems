import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './components/employees/add-employees/add-employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component'; 
import { AppGuardGuard } from './services/guards/app-guard.guard';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { DepartmentsComponent } from './components/departments/departments.component';
import { AddDepartmentsComponent } from './components/departments/add-departments/add-departments.component';
import { ManageEmployeesComponent } from './components/employees/manage-employees/manage-employees.component';
import { ManageDepartmentsComponent } from './components/departments/manage-departments/manage-departments.component';
import { ManagersComponent } from './components/managers/managers.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },//, canActivate: [AppGuardGuard]
  { path: 'login', component: LoginComponent,canActivate: [LoginGuardGuard]},
  
  { path: 'dashboard', component: DashboardComponent, canActivate: [AppGuardGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AppGuardGuard] },
  { path: 'employees', component: EmployeesComponent, canActivate: [AppGuardGuard] },
  { path: 'manage-employees', component: ManageEmployeesComponent, canActivate: [AppGuardGuard] },
  { path: 'departments', component: DepartmentsComponent, canActivate: [AppGuardGuard] },
  { path: 'manage-departments', component: ManageDepartmentsComponent, canActivate: [AppGuardGuard] },
  { path: 'managers', component: ManagersComponent, canActivate: [AppGuardGuard] },

  { path: '**', component: DashboardComponent, canActivate: [AppGuardGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
