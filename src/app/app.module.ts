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
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponent,
    RatesComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide : ACCOUNT_SERVICE_TOKEN, useClass: AccountsRemoteService},
    { provide : PROVIDER_SERVICE_TOKEN, useClass: ProvidersLocalService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
