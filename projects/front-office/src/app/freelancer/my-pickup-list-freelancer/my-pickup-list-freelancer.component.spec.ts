import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPickupListFreelancerComponent } from './my-pickup-list-freelancer.component';

describe('MyPickupListFreelancerComponent', () => {
  let component: MyPickupListFreelancerComponent;
  let fixture: ComponentFixture<MyPickupListFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPickupListFreelancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPickupListFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
