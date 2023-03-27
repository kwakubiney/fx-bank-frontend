import { Component, Inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { transfer } from 'src/app/models/make.transfer';
import { providers } from 'src/app/models/provider';
import { AccountsRemoteService } from 'src/app/services/accounts-remote.service';
import { TransferRemoteService } from 'src/app/services/transfer-remote.service';
import { ACCOUNT_SERVICE_TOKEN } from 'src/app/services/utilities';
import { AccountStoreService } from 'src/app/store/account.store.service';
import { PurchaseStoreService } from 'src/app/store/purchase-store.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {

  public providers:providers={provider_id:"", provider_name:"", send_currency:"", receive_currency:"", sell_rate:0}
  providers$: Observable<providers> | undefined;
  accounts$: Observable<Account[]> | undefined;

  senders: Account[] = [{id:"",user_id:"", name:"", currency:""}]
  receivers: Account[] = [{id:"",user_id:"", name:"", currency:""}]
  senderDetail:Account= {user_id:"", name:"", currency:"", id:""}
  receiverDetail:Account= {user_id:"", name:"", currency:"", id:""}
  senderId : string | undefined
  receiverId : string | undefined
  amount:string = ""
  displayModal = false

  constructor(
    private purchaseStore: PurchaseStoreService,
    private accountStore: AccountStoreService,
    private transferService: TransferRemoteService,
    private messageService:MessageService,
    @Inject(ACCOUNT_SERVICE_TOKEN) private accountService: AccountsRemoteService,
  ) { 
  }

  ngOnInit() {
    this.senderId = undefined
    this.receiverId = undefined
    var userId = localStorage.getItem("user_id")!
    this.accountService.getAccountsForUserID(userId).subscribe(
      {
        next : res  => {
          this.accountStore.setAccount(res.data!)
        },
        error : err => console.log(err)
      }
    )
    this.providers$ = this.purchaseStore.getProvidersAsObservable();
    this.providers = this.purchaseStore.getProviders()  
    this.accountStore.getAccount().subscribe(
      {
        next: (account) => {
          this.senders = account.filter((element) => element.currency == this.providers.send_currency)
          this.receivers = account.filter(element => element.currency == this.providers.receive_currency)
          console.log(this.senders)
          console.log(this.receivers)
      },
      error: err => console.log(err)
    }
    )
  }

  onSubmit(){
    var transferRequestBody = {
      sender_account_id: this.senderId,
      receiver_account_id: this.receiverId,
      amount: Number(this.amount),
      rate: this.providers.sell_rate,
      provider_name: this.providers.provider_name
    } as transfer;
    console.log(transferRequestBody)
    this.transferService.makeTransfer(transferRequestBody).subscribe(
      {
        next : res  => {
          console.log(res.data)
          this.displayModal = !this.displayModal;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Purchase made successfully!',
          });
        },
        error : (err: Error) => {
          this.displayModal = !this.displayModal;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${err.message}`,
          });
          console.log(err)}
      }
    )
    this.senderDetail.name=""
    this.receiverDetail.name = ""
    this.amount = ""
    this.senderId = ""
    this.receiverId = ""
  }
}