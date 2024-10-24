import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], // If you need any other modules, import them here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed the property name from styleUrl to styleUrls
})
export class LoginComponent {
  constructor(private router: Router) {} // Inject Router

  onSubmit() {
    // Navigate to the user management page when the button is clicked
    this.router.navigate(['/usermanagement']);
  }
}
