import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
}) 
export class SidebarComponent {
  @Input() isOpen = true; // Accept isOpen as an input
  selectedMenu = '1'; // Change initial selectedMenu to a number

  constructor(private router: Router) {} // Inject Router

  onToggle() {
    this.isOpen = !this.isOpen;
  }  logout() {
    // Here you might want to clear any authentication tokens or user data
    // For example:
    // localStorage.removeItem('authToken');

    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  selectMenu(menu: string) {
    console.log(`Selected Menu: page${menu}`); // Log the selected page
    this.selectedMenu = menu;

    // Navigate to the selected menu using Router
    switch(menu) {
      case '1': // usermanagement
        this.router.navigate(['/usermanagement']);
        break;
      case '2': // orders
        this.router.navigate(['/orders']);
        break;
      case '3': // customerdetails
        this.router.navigate(['/customerdetails']);
        break;
      case '4': // loyaltylogic
        this.router.navigate(['/loyaltylogic']);
        break;
      default:
        this.router.navigate(['/']); // Default route
    }
  }  
}
