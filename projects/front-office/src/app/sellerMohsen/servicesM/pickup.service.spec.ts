import { TestBed } from '@angular/core/testing';

import { PickupService } from './pickup.service';

describe('PickupService', () => {
  let service: PickupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
