import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountStoreService {

  accounts:Account[] = []
  accounts$:BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([])

  constructor() { }


  setAccount(accounts:Account[]){
    this.accounts = accounts
    this.accounts$.next(accounts)
  }

  getAccount():Observable<Account[]>{
    return this.accounts$
  }

}
