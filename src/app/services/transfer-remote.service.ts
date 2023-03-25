import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { transfer } from '../models/make.transfer';
import { Response } from '../models/response.model';
import { TransferService } from './transfer-service';
import { buildUrl, handleError, httpOptions } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class TransferRemoteService implements TransferService{

  constructor(private http:HttpClient) {}

  makeTransfer(transfer: transfer): Observable<Response<transfer>> {
    const url = buildUrl(`/transfer`)
    return this.http.post<Response<transfer>>(url, transfer, httpOptions)
    .pipe(catchError(handleError))
  }

}

