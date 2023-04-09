import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakOrderByFreelancerComponent } from './trak-order-by-freelancer.component';

describe('TrakOrderByFreelancerComponent', () => {
  let component: TrakOrderByFreelancerComponent;
  let fixture: ComponentFixture<TrakOrderByFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrakOrderByFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrakOrderByFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
