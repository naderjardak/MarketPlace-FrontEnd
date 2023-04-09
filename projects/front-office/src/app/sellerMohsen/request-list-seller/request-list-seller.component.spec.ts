import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListSellerComponent } from './request-list-seller.component';

describe('RequestListSellerComponent', () => {
  let component: RequestListSellerComponent;
  let fixture: ComponentFixture<RequestListSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestListSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestListSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
