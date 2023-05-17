import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DashComponent } from './dash/dash.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'dashboard', component: DashComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
