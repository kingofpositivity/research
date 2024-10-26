import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SidebarComponent } from './sidebar/sidebar.component'; // Adjust path as necessary
import { NavbarComponent } from './navbar/navbar.component'; // Adjust path as necessary
import { OrdersComponent } from './pages/orders/orders.component'; // Ensure this path is correct
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component'; // Ensure this path is correct
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import necessary modules
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule to imports
    RouterOutlet, 
    SidebarComponent, 
    NavbarComponent, 
    OrdersComponent, AppComponent,
    UsermanagementComponent // Ensure components are valid
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ensure this is plural
})
export class AppComponent {
  title = 'research';
  isSidebarOpen = true; // Sidebar state

  constructor(private router: Router) {} // Inject Router

  isLoginPage(): boolean {
    return this.router.url === '/login'; // Check if the current URL is '/login'
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle the sidebar state
  }
}
