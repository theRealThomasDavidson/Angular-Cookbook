import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsButtonComponent } from './components/notifications-button/notifications-button.component';
import { ServicesModule } from './services/services.module';
//import { NotificationsService } from './services/notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
  ],
  providers: [
//    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
