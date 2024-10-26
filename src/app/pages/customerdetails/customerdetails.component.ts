import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customerdetails',
  standalone: true,
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,FormsModule
  ]
})
export class CustomerdetailsComponent {
  displayedColumns: string[] = ['name', 'phone', 'loyaltyPoints', 'actions'];
  items: any[] = []; // Initialize an empty array for items
  dataSource = new MatTableDataSource(this.items);
  currentItemCount = 0; // Track the current number of items loaded
  isLoading = false; // Track loading state
  isEditable = false; // Track if fields are editable
  percentageValue = 0; // Track percentage value
  durationValue = ''; // Track duration value
  redemptionValue = 0; // Track redemption value
  durationOptions = [30, 60, 90]; // Example duration options

  // Sample data to simulate data loading
  allItems = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    phone: `123-456-789${i % 10}`, // Sample phone numbers
    loyaltyPoints: Math.floor(Math.random() * 1000), // Random loyalty points
    status: i % 2 === 0 ? 'Active' : 'Inactive'
  }));

  constructor() {
    this.loadMoreItems(); // Load initial items
  }

  loadMoreItems() {
    if (this.isLoading || this.currentItemCount >= this.allItems.length) return; // Prevent loading if already loading or if all items are loaded

    this.isLoading = true; // Set loading state
    const itemsToLoad = 20; // Number of items to load at a time
    const newItems = this.allItems.slice(this.currentItemCount, this.currentItemCount + itemsToLoad);
    this.items.push(...newItems); // Add new items to the current items
    this.dataSource.data = this.items; // Update the data source
    this.currentItemCount += newItems.length; // Update current item count

    // Simulate a delay to mimic an API call
    setTimeout(() => {
      this.isLoading = false; // Reset loading state
    }, 1000);
  }

  onScroll() {
    const tableContainer = document.querySelector('.table-container');
    if (tableContainer) {
      // Calculate if the user is within 100 pixels of the bottom
      const nearBottom = tableContainer.scrollTop + tableContainer.clientHeight >= tableContainer.scrollHeight - 100;
      if (nearBottom) {
        this.loadMoreItems(); // Load more items when near bottom
      }
    }
  }

  toggleEdit() {
    this.isEditable = !this.isEditable; // Toggle edit state
  }

  saveChanges() {
    console.log('Changes saved:', {
      percentage: this.percentageValue,
      duration: this.durationValue,
      redemption: this.redemptionValue,
    });
    this.toggleEdit(); // Reset editable state
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase(); // Get filter value
    this.dataSource.filter = filterValue; // Apply filter
    console.log('Filter applied:', filterValue); // Log filter value
  }

  editItem(item: any) {
    console.log('Editing item:', item); // Log editing action
    // Implement your edit logic here
  }

  deleteItem(item: any) {
    console.log('Deleting item:', item); // Log delete action
    // Implement your delete logic here
  }
}
