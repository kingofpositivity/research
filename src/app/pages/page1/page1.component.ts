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
  selector: 'app-page1',
  standalone: true,
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
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
export class Page1Component implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'status', 'actions'];

  items = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 2 === 0 ? 'Active' : 'Inactive'
  }));
  dataSource = new MatTableDataSource(this.items);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    // Assign the paginator and sort to the data source after view initialization
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // No need for manual pageIndex handling, MatPaginator automatically handles it
  // changePage method is unnecessary now

  editItem(item: any) {
    console.log('Edit:', item);
  }

  deleteItem(item: any) {
    console.log('Delete:', item);
  }

}
