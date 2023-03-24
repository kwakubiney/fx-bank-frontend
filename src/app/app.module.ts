import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ACCOUNT_SERVICE_TOKEN, PROVIDER_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AccountsRemoteService } from './services/accounts-remote.service';
import { HttpClientModule } from '@angular/common/http';
import { RatesComponent } from './pages/rates/rates.component';
import { ProvidersLocalService } from './services/providers-local.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponent,
    RatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide : ACCOUNT_SERVICE_TOKEN, useClass: AccountsRemoteService},
    { provide : PROVIDER_SERVICE_TOKEN, useClass: ProvidersLocalService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
