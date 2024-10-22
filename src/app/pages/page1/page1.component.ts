import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'] // Corrected to styleUrls (with an 's')
})
export class Page1Component {
  items = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `123-456-789${i}`,
    status: i % 2 === 0 ? 'Active' : 'Inactive'
  }));

  editItem(item: any) {
    // Implement edit logic here
    console.log('Edit:', item);
  }

  deleteItem(item: any) {
    // Implement delete logic here
    console.log('Delete:', item);
  }

    // Pagination variables
  currentPage = 1;
  itemsPerPage = 10;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.items.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  // Change page method
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
