import { TestBed } from '@angular/core/testing';

import { TransferRemoteService } from './transfer-remote.service';

describe('TransferRemoteService', () => {
  let service: TransferRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
