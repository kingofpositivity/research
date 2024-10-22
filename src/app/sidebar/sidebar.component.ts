import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
}) 
export class SidebarComponent {
  @Input() isOpen = true; // Add this line to accept isOpen as an input
  selectedMenu = 'orders';

  onToggle() {
    this.isOpen = !this.isOpen;
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }
 
}
