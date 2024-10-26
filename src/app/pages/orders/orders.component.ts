import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // Import FormsModule
 
@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,FormsModule
  ]
})
export class OrdersComponent {
  displayedColumns: string[] = ['orderId', 'price', 'customerName', 'branchName'];
  items: any[] = [];
  dataSource = new MatTableDataSource(this.items);
  currentItemCount = 0;
  isLoading = false;

  filterValues = {
    orderId: '',       
    searchText: '',
    fromDate: '',
    toDate: '',
    branch: ''
  };

  allItems = Array.from({ length: 100 }, (_, i) => ({
    orderId: `OID${i + 1}`,
    price: (Math.random() * 1000).toFixed(2),
    customerName: `Customer ${i + 1}`,
    branchName: i % 2 === 0 ? 'MG Road' : 'Marathahalli'
  }));

  constructor() {
    this.loadMoreItems();
  }

  loadMoreItems() {
    if (this.isLoading || this.currentItemCount >= this.allItems.length) return;

    this.isLoading = true;
    const itemsToLoad = 20;
    const newItems = this.allItems.slice(this.currentItemCount, this.currentItemCount + itemsToLoad);
    this.items.push(...newItems);
    this.dataSource.data = this.items;
    this.currentItemCount += newItems.length;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  onScroll() {
    const tableContainer = document.querySelector('.table-container');
    if (tableContainer) {
      const nearBottom = tableContainer.scrollHeight - tableContainer.scrollTop - tableContainer.clientHeight < 100;
      if (nearBottom) {
        this.loadMoreItems();
      }
    }
  }

  applyFilter() {
    console.log('Filters applied:', this.filterValues);
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  resetFilters() {
    this.filterValues = {     orderId: '', 
      searchText: '',
      fromDate: '',
      toDate: '',
      branch: ''
    };
    this.applyFilter();
  }

  exportData() {
    console.log('Data export initiated');
  }
}
