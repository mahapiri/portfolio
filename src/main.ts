import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// window.addEventListener("orientationchange", function () {
//   if(screen.orientation.angle == 90) {
//     console.log('Horizontal, 90');
//   }
// });
