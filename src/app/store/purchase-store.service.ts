import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { providers } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class PurchaseStoreService {

  constructor() {
  }

  public providers:providers={provider_id:"", provider_name:"", send_currency:"", receive_currency:"", buy_rate:0, sell_rate:0}
  public providers$: BehaviorSubject<providers> = new BehaviorSubject<providers>
  ({provider_id:"", provider_name:"", send_currency:"", receive_currency:"", buy_rate:0, sell_rate:0});


  setProvider(providers: providers): void {
      this.providers = providers
      this.providers$?.next(providers);  
  }

  getProvidersAsObservable(): Observable<providers> {
  return this.providers$
  }

  getProviders(): providers {
    return this.providers
  }
  

}
