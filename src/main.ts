import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import your standalone AppComponent
import { appConfig } from './app/app.config';  // Ensure you have a config for your app

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
