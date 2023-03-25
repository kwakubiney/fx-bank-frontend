import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ACCOUNT_SERVICE_TOKEN, PROVIDER_SERVICE_TOKEN, TRANSFER_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AccountsRemoteService } from './services/accounts-remote.service';
import { HttpClientModule } from '@angular/common/http';
import { RatesComponent } from './pages/rates/rates.component';
import { ProvidersLocalService } from './services/providers-local.service';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { Dialog, DialogModule } from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseStoreService } from './store/purchase-store.service';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { AccountStoreService } from './store/account.store.service';
import { TransferRemoteService } from './services/transfer-remote.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponent,
    RatesComponent,
    CreateAccountComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    MessagesModule,
    BrowserAnimationsModule,
    ToastModule,
    BadgeModule
  ],
  providers: [
    { provide : ACCOUNT_SERVICE_TOKEN, useClass: AccountsRemoteService},
    { provide : PROVIDER_SERVICE_TOKEN, useClass: ProvidersLocalService},
    { provide : TRANSFER_SERVICE_TOKEN, useClass: TransferRemoteService},
    PurchaseStoreService,
    AccountStoreService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
