import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAgencyComponent } from './request-agency.component';

describe('RequestAgencyComponent', () => {
  let component: RequestAgencyComponent;
  let fixture: ComponentFixture<RequestAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
