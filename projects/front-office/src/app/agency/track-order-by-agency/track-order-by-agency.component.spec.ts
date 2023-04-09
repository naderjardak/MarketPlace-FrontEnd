import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackOrderByAgencyComponent } from './track-order-by-agency.component';

describe('TrackOrderByAgencyComponent', () => {
  let component: TrackOrderByAgencyComponent;
  let fixture: ComponentFixture<TrackOrderByAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackOrderByAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackOrderByAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
