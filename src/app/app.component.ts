import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { SidebarComponent } from './sidebar/sidebar.component'; // Adjust path as necessary
import { NavbarComponent } from './navbar/navbar.component'; // Adjust path as necessary

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent], // Include both components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Ensure this is plural
})
export class AppComponent {
  title = 'research';
  isSidebarOpen = true; // Sidebar state

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle the sidebar state
  }
}
