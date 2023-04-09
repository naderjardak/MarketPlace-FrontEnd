import { TestBed } from '@angular/core/testing';

import { ProductSreviceService } from './product-srevice.service';

describe('ProductSreviceService', () => {
  let service: ProductSreviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSreviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
