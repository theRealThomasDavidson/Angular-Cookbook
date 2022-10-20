import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { EmployeeGuard } from './guards/employee.guard';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'auth'
}, {
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}, {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate: [AuthGuard],
}, {
  path: 'employee',
  loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
  canActivate: [AuthGuard, AdminGuard, EmployeeGuard],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
