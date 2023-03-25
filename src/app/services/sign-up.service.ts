import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Response } from '../models/response.model';
import { signUpRequest } from '../models/signup.model';
import { signUp } from './sign-up-service';
import { buildUrl, handleError, httpOptions } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class SignUpRemoteService implements signUp{

  constructor(private http:HttpClient) {}

  signUp(req: signUpRequest): Observable<Response<signUpRequest>> {
    const url = buildUrl(`/signUp`)
    return this.http.post<Response<signUpRequest>>(url, req, httpOptions)
    .pipe(catchError(handleError))
  }
}