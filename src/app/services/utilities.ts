import { HttpHeaders } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export const ACCOUNT_SERVICE_TOKEN = new InjectionToken('account-service');
export const PROVIDER_SERVICE_TOKEN = new InjectionToken('provider-service');
export const TRANSFER_SERVICE_TOKEN = new InjectionToken('transfer-service');


export function createObservable<T>(value: T): Observable<T> {
  return new Observable<T>((subscriber) => {
    subscriber.next(value);
    subscriber.complete();
  });
}

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