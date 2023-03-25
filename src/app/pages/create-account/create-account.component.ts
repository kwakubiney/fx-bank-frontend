import { Component, Inject, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/models/account';
import { AccountsRemoteService } from 'src/app/services/accounts-remote.service';
import { ACCOUNT_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnDestroy {

  constructor(@Inject(ACCOUNT_SERVICE_TOKEN) private accountService: AccountsRemoteService,
            private messageService: MessageService
  ){
  }

  displayModal:boolean = false;
  currency:string[] = ["GB Pound", "US Dollar", "Ghana Cedis", "Naira"]

  subscription:Subscription = Subscription.EMPTY;

  accounts:Account = {
    id:"",
    currency: "john",
    name: "",
    user_id: "bfbab79b-4391-4947-9dd4-1064b8dbdd80"
  }

  user_id = "bfbab79b-4391-4947-9dd4-1064b8dbdd80"

  createAccount(selectedCurrency:string, accountName:string, user_id:string ){
    let account = { currency: selectedCurrency, name: accountName, user_id: user_id} as Account;
    this.subscription = this.accountService.createAccount(account)
    .subscribe({
      next: (value) => {
        this.displayModal = !this.displayModal;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Account created successfully!',
        });
      },
      error: (error) => {
        this.displayModal = !this.displayModal;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'An unexpected error occurred while trying to create account.',
        });
      },
    });
    }

  onSubmit(){
    this.createAccount(this.accounts.currency, this.accounts.name, this.user_id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
