import { TestBed } from '@angular/core/testing';

import { PurchaseStoreService } from './purchase-store.service';

describe('PurchaseStoreService', () => {
  let service: PurchaseStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
