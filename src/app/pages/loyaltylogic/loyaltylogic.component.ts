import { Component } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';  // Import necessary modules

@Component({
  selector: 'app-loyaltylogic',
  standalone: true,
  imports: [CommonModule],  // Ensure CommonModule is added here
  templateUrl: './loyaltylogic.component.html',
  styleUrls: ['./loyaltylogic.component.css']
})
export class LoyaltyLogicComponent {
  isEditable = false;
  durationOptions = [15, 30, 45, 60];  // Array for duration options

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }
}
