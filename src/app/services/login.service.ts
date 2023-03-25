import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { loginResp } from '../models/login.model';
import { Response } from '../models/response.model';
import { signUpRequest } from '../models/signup.model';
import { login } from './login-service';
import { buildUrl, handleError, httpOptions } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements login {

  constructor(private http:HttpClient) { }

  login(req: signUpRequest): Observable<Response<loginResp>> {
    
    const url = buildUrl(`/signIn`)
    return this.http.post<Response<loginResp>>(url, req, httpOptions)
    .pipe(catchError(handleError))
  }
}
