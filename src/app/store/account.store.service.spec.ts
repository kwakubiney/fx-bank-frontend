import { TestBed } from '@angular/core/testing';

import { AccountStoreService } from './account.store.service';

describe('AccountStoreService', () => {
  let service: AccountStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
