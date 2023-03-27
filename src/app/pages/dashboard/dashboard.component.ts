import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountsRemoteService } from 'src/app/services/accounts-remote.service';
import { ACCOUNT_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AccountStoreService } from 'src/app/store/account.store.service';
import { PurchaseStoreService } from 'src/app/store/purchase-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  subscription:Subscription = Subscription.EMPTY
  userId:string = ""
  username:string=""
  accountDetails:Account[] = []
    
  constructor(
    @Inject(ACCOUNT_SERVICE_TOKEN) private accountService: AccountsRemoteService,
    private accountStore: AccountStoreService
  ) {}


  ngOnInit(){
    this.userId = localStorage.getItem("user_id")!
    this.username = localStorage.getItem("username")!
    this.subscription = this.getAccountsForUser(this.userId).subscribe(
      {
        next : res  => {
          console.log(res.data)
          this.accountDetails = res.data!.map(item => {
            return {
              ...item,
              balance: item.balance!
            };
          });
          console.log(this.accountDetails)
          this.accountStore.setAccount(this.accountDetails)
        },
        error : err => console.log(err)
      }
    )
  }

  getAccountsForUser(id:string){
    return this.accountService.getAccountsForUserID(id)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
