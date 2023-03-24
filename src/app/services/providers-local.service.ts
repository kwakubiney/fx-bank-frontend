import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { providers } from '../models/provider';
import { Response } from '../models/response.model';
import { createObservable } from './utilities';

@Injectable({
  providedIn: 'root'
})
export class ProvidersLocalService {

  constructor() { }

  private providers: providers[] = [

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b4",
      provider_name: "Goldman Sachs",
      currency_exchange : "USD-CAD",
      sell_rate: 1.24,
    },

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b6",
      provider_name: "Morgan Stanley",
      currency_exchange : "USD-CAD",
      sell_rate: 1.24,
    },

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b3",
      provider_name: "CIBC",
      currency_exchange : "GHC-NAIRA",
      sell_rate: 1.24,
    },

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b7",
      provider_name: "Bank Of America",
      currency_exchange : "USD-CAD",
      sell_rate: 1.24,
    },

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b0",
      provider_name: "Scotia Bank",
      currency_exchange : "USD-CAD",
      sell_rate: 1.24,
    },

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b4",
      provider_name: "Ecobank",
      currency_exchange : "USD-CAD",
      sell_rate: 1.24,
    },

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742538a4",
      provider_name: "Citi Bank",
      currency_exchange : "USD-CAD",
      sell_rate: 1.24,
    },

    {
      buy_rate: 1.34,
      provider_id: "5220bf8a-f10f-428b-8095-9779742438b4",
      provider_name: "Goldman Sachs",
      currency_exchange : "USD-CAD",
      sell_rate: 1.24,
    },
  ]


  getProvidersList():Observable<Response<providers[]>>{
    return createObservable({
      message: "worked",
      data: this.providers
  })
}}
