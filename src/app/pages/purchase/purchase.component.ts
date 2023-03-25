import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';
import { transfer } from 'src/app/models/make.transfer';
import { providers } from 'src/app/models/provider';
import { TransferRemoteService } from 'src/app/services/transfer-remote.service';
import { AccountStoreService } from 'src/app/store/account.store.service';
import { PurchaseStoreService } from 'src/app/store/purchase-store.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {

  public providers:providers={provider_id:"", provider_name:"", send_currency:"", receive_currency:"", buy_rate:0, sell_rate:0}
  providers$: Observable<providers> | undefined;
  accounts$: Observable<Account[]> | undefined;

  senders: Account[] = [{id:"",user_id:"", name:"", currency:""}]
  receivers: Account[] = [{id:"",user_id:"", name:"", currency:""}]
  senderDetail:Account= {user_id:"", name:"", currency:"", id:""}
  senderId = ""
  receiverId = ""
  amount:string = ""
  displayModal = false

  constructor(
    private purchaseStore: PurchaseStoreService,
    private accountStore: AccountStoreService,
    private transferService: TransferRemoteService,
    private messageService:MessageService 
  ) { 
  }

  ngOnInit() {
    this.providers$ = this.purchaseStore.getProvidersAsObservable();
    this.providers = this.purchaseStore.getProviders()
    this.accountStore.getAccount().subscribe(
      {
        next: (account) => {
          console.log(account)
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
    console.log(this.amount)
    var transferRequestBody = {
      sender_account_id: this.senderId,
      receiver_account_id: this.receiverId,
      amount: Number(this.amount)*100,
      rate: this.providers.buy_rate*100,
      provider_name: this.providers.provider_name
    } as transfer;
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
        error : err => {
          this.displayModal = !this.displayModal;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Purchase failed!',
          });
          console.log(err)}
      }
    )
    this.senderId = ""
    this.receiverId = ""
    this.amount = ""
  }
}
