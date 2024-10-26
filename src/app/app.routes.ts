 
 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
 import { CustomerdetailsComponent } from './pages/customerdetails/customerdetails.component';
import { LoyaltyLogicComponent } from './pages/loyaltylogic/loyaltylogic.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { LoginComponent } from './login/login.component';
  
export const routes: Routes = [
  { path: 'usermanagement', component: UsermanagementComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customerdetails', component: CustomerdetailsComponent },
  { path: 'loyaltylogic', component: LoyaltyLogicComponent  },
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route
];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
