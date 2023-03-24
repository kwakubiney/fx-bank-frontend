import { TestBed } from '@angular/core/testing';

import { ProvidersLocalService } from './providers-local.service';

describe('ProvidersLocalService', () => {
  let service: ProvidersLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
