import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupListComponent } from './pickup-list.component';

describe('PickupListComponent', () => {
  let component: PickupListComponent;
  let fixture: ComponentFixture<PickupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
