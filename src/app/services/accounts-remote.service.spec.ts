import { TestBed } from '@angular/core/testing';

import { AccountsRemoteService } from './accounts-remote.service';

describe('AccountsRemoteService', () => {
  let service: AccountsRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
