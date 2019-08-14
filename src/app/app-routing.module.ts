import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './components/customers/create-customer/create-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
