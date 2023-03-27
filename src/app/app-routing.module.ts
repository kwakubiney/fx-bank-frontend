import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { NonAuthGuardService } from './auth/non-auth-guard.service';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { RatesComponent } from './pages/rates/rates.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [NonAuthGuardService] 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path: 'rates',
    component: RatesComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path: 'createAccount',
    component: CreateAccountComponent,
    canActivate: [AuthGuardService] 
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    canActivate: [AuthGuardService] 
  },

  {
    path: 'signup',
    component: SignUpComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
