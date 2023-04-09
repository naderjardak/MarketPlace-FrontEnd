import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PikupInProgressSellerComponent } from './pikup-in-progress-seller.component';

describe('PikupInProgressSellerComponent', () => {
  let component: PikupInProgressSellerComponent;
  let fixture: ComponentFixture<PikupInProgressSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PikupInProgressSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PikupInProgressSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
