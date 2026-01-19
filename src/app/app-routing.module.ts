import { CustomerCreateEditComponent } from './component/customer-create-edit/customer-create-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { ManagementComponent } from './component/management/management.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'customer',
        children: [
          {
            path: 'list',
            component: CustomerListComponent,
          },
          {
            path: 'create',
            component: CustomerCreateEditComponent,
          },
          {
            path: 'edit',
            component: CustomerCreateEditComponent,
          },
        ],
      },
      {
        path : "management",
        component : ManagementComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
