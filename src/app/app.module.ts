import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ACCOUNT_SERVICE_TOKEN, LOGIN_SERVICE_TOKEN, PROVIDER_SERVICE_TOKEN, SIGNUP_SERVICE_TOKEN, TRANSFER_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AccountsRemoteService } from './services/accounts-remote.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpRemoteService } from './services/sign-up.service';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptor } from './services/http-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DashboardComponent,
    RatesComponent,
    CreateAccountComponent,
    PurchaseComponent,
    SignUpComponent,
    LoginComponent
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
    {provide : SIGNUP_SERVICE_TOKEN, useClass: SignUpRemoteService},
    {provide : LOGIN_SERVICE_TOKEN, useClass: LoginService},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    PurchaseStoreService,
    AccountStoreService,
    MessageService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
