import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingPickupSellerComponent } from './traking-pickup-seller.component';

describe('TrakingPickupSellerComponent', () => {
  let component: TrakingPickupSellerComponent;
  let fixture: ComponentFixture<TrakingPickupSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrakingPickupSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrakingPickupSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
