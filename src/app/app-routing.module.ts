import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component'; 
import { AppGuardGuard } from './services/guards/app-guard.guard';
import { LoginGuardGuard } from './services/guards/login-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },//, canActivate: [AppGuardGuard]
  { path: 'login', component: LoginComponent,canActivate: [LoginGuardGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AppGuardGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AppGuardGuard] },
  { path: 'employees', component: EmployeesComponent, canActivate: [AppGuardGuard] },
  { path: 'add-employees', component: AddEmployeesComponent, canActivate: [AppGuardGuard] },

  { path: '**', component: DashboardComponent, canActivate: [AppGuardGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
