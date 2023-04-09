import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPickupListAgencyComponent } from './my-pickup-list-agency.component';

describe('MyPickupListAgencyComponent', () => {
  let component: MyPickupListAgencyComponent;
  let fixture: ComponentFixture<MyPickupListAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPickupListAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPickupListAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
