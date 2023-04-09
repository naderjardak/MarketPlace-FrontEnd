import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMListAgencyComponent } from './delivery-mlist-agency.component';

describe('DeliveryMListAgencyComponent', () => {
  let component: DeliveryMListAgencyComponent;
  let fixture: ComponentFixture<DeliveryMListAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryMListAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryMListAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
