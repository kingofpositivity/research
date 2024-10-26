import { Component } from '@angular/core';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-loyaltylogic',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are added here
  templateUrl: './loyaltylogic.component.html',
  styleUrls: ['./loyaltylogic.component.css']
})
export class LoyaltyLogicComponent {
  isEditable = false;
  percentageValue: number | null = null; // Property for percentage value
  durationValue: number | null = null;    // Property for duration value
  redemptionValue: number | null = null;  // Property for redemption value
  durationOptions = [15, 30, 45, 60];     // Array for duration options

  toggleEdit() {
    this.isEditable = !this.isEditable;
    console.log(`Edit mode: ${this.isEditable}`); // Log the edit mode status
  }

  saveChanges() {
    console.log('Saving changes:');
    console.log(`Percentage: ${this.percentageValue}`);
    console.log(`Duration: ${this.durationValue}`);
    console.log(`Max points redemption: ${this.redemptionValue}`);
    this.toggleEdit(); // Optionally toggle off edit mode after saving
  }
}
