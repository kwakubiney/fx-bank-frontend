import { HttpHeaders } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export const ACCOUNT_SERVICE_TOKEN = new InjectionToken('account-service');


export function handleError(error: any): Observable<never> {
  throw new Error('Oops something went wrong! Please try again later.');
}

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

export function buildUrl(path: string): string {
  return `${environment.baseUrl}${path}`;
}