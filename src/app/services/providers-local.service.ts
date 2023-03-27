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
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b4",
      provider_name: "Goldman Sachs",
      send_currency: "US Dollar",
      receive_currency: "Ghana Cedis",
      sell_rate: 1.47,
    },

    {
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b6",
      provider_name: "Morgan Stanley",
      send_currency: "US Dollar",
      receive_currency: "Ghana Cedis",
      sell_rate: 2.34,
    },

    {
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b3",
      provider_name: "CIBC",
      send_currency: "US Dollar",
      receive_currency: "Ghana Cedis",
      sell_rate: 1.24,
    },

    {
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b7",
      provider_name: "Bank Of America",
      send_currency: "Naira",
      receive_currency: "Ghana Cedis",
      sell_rate: 1.58,
    },

    {
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b0",
      provider_name: "Scotia Bank",
      send_currency: "Naira",
      receive_currency: "Ghana Cedis",
      sell_rate: 1.63,
    },

    {
      provider_id: "5220bf8a-f10f-428b-8095-9779742538b4",
      provider_name: "Ecobank",
      send_currency: "Naira",
      receive_currency: "Ghana Cedis",
      sell_rate: 1.72,
    },

    {
      provider_id: "5220bf8a-f10f-428b-8095-9779742538a4",
      provider_name: "Citi Bank",
      send_currency: "Naira",
      receive_currency: "Ghana Cedis",
      sell_rate: 1.42,
    },

    {
      provider_id: "5220bf8a-f10f-428b-8095-9779742438b4",
      provider_name: "Goldman Sachs",
      send_currency: "GB Pound",
      receive_currency: "Ghana Cedis",
      sell_rate: 3.63,
    },
  ]


  getProvidersList():Observable<Response<providers[]>>{
    return createObservable({
      message: "worked",
      data: this.providers
  })
}}
