import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AccountService } from './accounts.service';
import { catchError, Observable } from 'rxjs';
import { Account } from '../models/account';
import { Response } from '../models/response.model';
import { environment } from 'src/environments/environment';
import { buildUrl, handleError, httpOptions } from 'src/app/services/utilities';

@Injectable({
  providedIn: 'root'
})
export class AccountsRemoteService implements AccountService{

  constructor(private http: HttpClient) {}
  getAccountsForUserID(user_id: string): Observable<Response<Account[]>> {
    const url = buildUrl(`/auth/getAccounts/${user_id}`)
    return this.http.get<Response<Account[]>>(url)
    .pipe(catchError(handleError))
  }

  createAccount(account: Account): Observable<Response<Account>> {
    const url = buildUrl("/auth/createAccount")
    return this.http.post<Response<Account>>(url, account, httpOptions)
    .pipe(catchError(handleError))
  }
}
