
 
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customerdetails',
  standalone: true,
   templateUrl: './customerdetails.component.html',
  styleUrl: './customerdetails.component.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class customerdetailsComponent {
  displayedColumns: string[] = ['name', 'email', 'status', 'actions'];
  items: any[] = []; // Initialize an empty array for items
  dataSource = new MatTableDataSource(this.items);
  currentItemCount = 0; // Track the current number of items loaded
  isLoading = false; // Track loading state

  // Sample data to simulate data loading
  allItems = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
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
  }
}


