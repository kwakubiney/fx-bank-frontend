import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountsRemoteService } from 'src/app/services/accounts-remote.service';
import { ACCOUNT_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  subscription:Subscription = Subscription.EMPTY
  userId:string = "bfbab79b-4391-4947-9dd4-1064b8dbdd80"
  accountDetails:Account[] = []
    
  constructor(
    @Inject(ACCOUNT_SERVICE_TOKEN) private accountService: AccountsRemoteService
  ) {}


  ngOnInit(){
    this.subscription = this.getAccountsForUser(this.userId).subscribe(
      {
        next : res  => {
          this.accountDetails = res.data!
          console.log(res.data)
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
