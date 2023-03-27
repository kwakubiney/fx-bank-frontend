import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NonAuthService } from './non.auth.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuardService {

  constructor(public auth: NonAuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isNotAuthenticated()) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
