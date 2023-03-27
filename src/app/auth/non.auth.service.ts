import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class NonAuthService {
  constructor(public jwtHelper: JwtHelperService) {}

  public isNotAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token){
        return true;
    }
    return this.jwtHelper.isTokenExpired(token);
  }
}
