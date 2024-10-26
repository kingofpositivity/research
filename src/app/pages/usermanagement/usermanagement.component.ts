import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; // Make sure this is here

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-usermanagement',
  standalone: true,
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
  imports: [
    CommonModule,
    MatTableModule,FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ]
})export class UsermanagementComponent {
[x: string]: any;
searchInput: string = ''; // Declare a variable to hold the input text

  displayedColumns: string[] = ['name', 'email', 'status', 'actions'];
  items: any[] = []; // Initialize an empty array for items
  dataSource = new MatTableDataSource(this.items);
  currentItemCount = 0; // Track the current number of items loaded
  isLoading = false; // Track loading state
  isEditable = true; // Control the visibility of the edit form
  showProfile = false; // Control the visibility of the edit form
  editName: string = ''; // Placeholder for name edit
  editEmail: string = ''; // Placeholder for email edit
  locationOptions = ['Bagalur', 'MG Road', 'EG Pura']; // Array of options
  userData = {
    name: '',
    email: '',
    store: '',
    password: ''
  }; // Object to hold user input data
  // Sample data to simulate data loading
  allItems = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 2 === 0 ? 'Active' : 'Inactive'
  }));
  onSearchClick(searchText: string) {
    console.log('Search clicked with input:', searchText);
    // You can handle the search logic here
  }
  constructor() {
    this.loadMoreItems(); // Load initial items
  }
  durationOptions = [15, 30, 45, 60];  // Array for duration options

  // Show the edit form and hide the main page
   

  // Hide the edit form and show the main page
 

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
        const nearBottom = tableContainer.scrollHeight - tableContainer.scrollTop - tableContainer.clientHeight < 100;
        if (nearBottom) {
            this.loadMoreItems(); // Load more items when scrolled near the bottom
        }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editItem(item: any) {
    console.log('Edit:', item);
  }

  deleteItem(item: any) {
    console.log('Delete:', item);
  }// Show the edit form and hide the main page
  toggleEdit(text: string) {
    this.showProfile = text === 'Profile Edit';
    this.isEditable = !this.isEditable; // Toggle edit mode
    console.log('Edit mode toggled:', this.isEditable);
  }
  
  logAction(action: string) {
    console.log(action); // Log the button action
  }
  

// Hide the edit form and show the main page when canceling
cancelEdit() {
  this.isEditable = false; // Set editable to false to return to the main page
}

// Save changes and return to the main page
saveChanges() {
  console.log('Changes saved:', this.editName, this.editEmail);
  this.isEditable = false; // Set editable to false to return to the main page after saving
}
 // Function to reset fields to initial state
 resetFields() {
  this.userData = {
    name: '',
    email: '',
    store: '',
    password: ''
  };
  console.log('Fields have been reset:', this.userData);
  this.toggleEdit('save')

}

// Function to save data and log selected items
saveData() {
  console.log('Selected items to save:', this.userData);
  this.toggleEdit('save')
  // Add your save logic here
} 
}
