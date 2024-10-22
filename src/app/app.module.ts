import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page1/page1.component';
import { SidebarComponent } from './sidebar/sidebar.component'; // Ensure the correct path
import { NavbarComponent } from './navbar/navbar.component'; // Ensure the correct path

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    SidebarComponent, // Add this
    NavbarComponent    // Add this
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
