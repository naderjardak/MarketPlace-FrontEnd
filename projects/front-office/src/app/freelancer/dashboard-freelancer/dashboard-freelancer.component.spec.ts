import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFreelancerComponent } from './dashboard-freelancer.component';

describe('DashboardFreelancerComponent', () => {
  let component: DashboardFreelancerComponent;
  let fixture: ComponentFixture<DashboardFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
