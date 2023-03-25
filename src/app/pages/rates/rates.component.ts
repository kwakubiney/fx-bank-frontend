import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { providers } from 'src/app/models/provider';
import { ProvidersLocalService } from 'src/app/services/providers-local.service';
import { PROVIDER_SERVICE_TOKEN } from 'src/app/services/utilities';
import {DialogModule} from 'primeng/dialog';
import { PurchaseStoreService } from 'src/app/store/purchase-store.service';
import { AccountStoreService } from 'src/app/store/account.store.service';


@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit, OnDestroy {

  providers:providers[] = []
  subscription:Subscription = Subscription.EMPTY
  display:boolean = false

  constructor(
    @Inject(PROVIDER_SERVICE_TOKEN) private providerService: ProvidersLocalService,
    private purchasingStore: PurchaseStoreService,
    private accountsStore: AccountStoreService
  ) {}


  ngOnInit(): void {
    this.subscription = this.providerService.getProvidersList().subscribe(
      {
        next: (res) => {
          this.providers = res.data!
          console.log(res.data)
      },
      error : err => console.log(err)    
    }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  setProviderDetails(provider:providers){
    this.purchasingStore.setProvider(provider)
  }
}
