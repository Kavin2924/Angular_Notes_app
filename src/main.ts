import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//my try
import{ HeaderComponent } from './app/header/header.component';
import{ UserComponent } from './app/user/user.component';
//my try

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

//my try  
bootstrapApplication(HeaderComponent);
bootstrapApplication(UserComponent);
//my try