import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPickupComponent } from './add-pickup.component';

describe('AddPickupComponent', () => {
  let component: AddPickupComponent;
  let fixture: ComponentFixture<AddPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPickupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
