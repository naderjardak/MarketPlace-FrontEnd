import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupListFreelancerComponent } from './pickup-list-freelancer.component';

describe('PickupListFreelancerComponent', () => {
  let component: PickupListFreelancerComponent;
  let fixture: ComponentFixture<PickupListFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickupListFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupListFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
