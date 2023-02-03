import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { User } from './infrastructure/driven-adapter/service/user.service/user.service.component';
import { Zone } from './infrastructure/driven-adapter/service/zone.service/zone.service.component';
import { UserComponent } from './ui/components/user/user/user.component';
import { ZoneComponent } from './ui/components/zone/zone/zone.component';

@NgModule({
  declarations: [
    AppComponent,
    User.ServiceComponent,
    Zone.ServiceComponent,
    UserComponent,
    ZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
