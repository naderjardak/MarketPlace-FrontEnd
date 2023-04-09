import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupUpdateComponent } from './pickup-update.component';

describe('PickupUpdateComponent', () => {
  let component: PickupUpdateComponent;
  let fixture: ComponentFixture<PickupUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
