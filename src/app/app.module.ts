import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
 import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

// Import Angular Material modules here
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';   
import { OrdersComponent } from './pages/orders/orders.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { customerdetailsComponent } from './pages/customerdetails/customerdetails.component';
import { LoyaltyLogicComponent } from './pages/loyaltylogic/loyaltylogic.component';
  
// If AppComponent is a standalone component, you should not import it here
// import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import Material modules here
    MatTableModule,
    MatPaginatorModule,
    SidebarComponent,
    NavbarComponent,
    MatSortModule,
    MatInputModule,UsermanagementComponent,OrdersComponent,customerdetailsComponent,LoyaltyLogicComponent,
    MatButtonModule,
    // No need to import AppComponent here as it is standalone
  ],
  providers: [],
  // Remove AppComponent from the bootstrap array since it is not in the NgModule
  bootstrap: [] // No need to bootstrap here
})
export class AppModule {}
