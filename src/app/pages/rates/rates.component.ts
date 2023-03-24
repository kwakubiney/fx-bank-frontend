import { Component, Inject, OnInit } from '@angular/core';
import { providers } from 'src/app/models/provider';
import { ProvidersLocalService } from 'src/app/services/providers-local.service';
import { PROVIDER_SERVICE_TOKEN } from 'src/app/services/utilities';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  providers:providers[] = []

  constructor(
    @Inject(PROVIDER_SERVICE_TOKEN) private providerService: ProvidersLocalService
  ) {}

  ngOnInit(): void {
    this.providerService.getProvidersList().subscribe(
      {
        next : (res) => {
          this.providers = res.data!
          console.log(res.data)
      },
      error : err => console.log(err)    
    }
    )
  }

  
}
