import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export const ACCOUNT_SERVICE_TOKEN = new InjectionToken('account-service');
export const PROVIDER_SERVICE_TOKEN = new InjectionToken('provider-service');
export const TRANSFER_SERVICE_TOKEN = new InjectionToken('transfer-service');
export const SIGNUP_SERVICE_TOKEN = new InjectionToken('signup-service');
export const LOGIN_SERVICE_TOKEN = new InjectionToken('login-service');

export function createObservable<T>(value: T): Observable<T> {
  return new Observable<T>((subscriber) => {
    subscriber.next(value);
    subscriber.complete();
  });
}

export function handleError(error: HttpErrorResponse): Observable<never> {
  let errorMsg:string
  errorMsg = error.error.message;
  throw new Error(errorMsg);
}

// function getServerErrorMessage(error: HttpErrorResponse): string {
//   switch (error.status) {
//       case 404: {
//           return `Not Found: ${error.message}`;
//       }
//       case 403: {
//           return `Access Denied: ${error.message}`;
//       }
//       case 500: {
//           return `Internal Server Error: ${error.message}`;
//       }
//       case 400: {
//         return `Bad Request: ${error.message}`;
//     }
//       default: {
//           return `Unknown Server Error: ${error.message}`;
//       }
//   }
// }

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

export function buildUrl(path: string): string {
  return `${environment.baseUrl}${path}`;
}