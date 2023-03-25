import { TestBed } from '@angular/core/testing';

import { SignUpRemoteService } from './sign-up.service';

describe('SignUpService', () => {
  let service: SignUpRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
