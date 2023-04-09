import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeliveryMenAgencyComponent } from './add-delivery-men-agency.component';

describe('AddDeliveryMenAgencyComponent', () => {
  let component: AddDeliveryMenAgencyComponent;
  let fixture: ComponentFixture<AddDeliveryMenAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeliveryMenAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeliveryMenAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
