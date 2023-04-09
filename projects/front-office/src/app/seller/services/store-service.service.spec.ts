import { TestBed } from '@angular/core/testing';

import { StoreServiceService } from './store-service.service';

describe('StoreServiceService', () => {
  let service: StoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
