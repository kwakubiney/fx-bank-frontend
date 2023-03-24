import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ACCOUNT_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AccountsRemoteService } from './services/accounts-remote.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide : ACCOUNT_SERVICE_TOKEN, useClass: AccountsRemoteService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
