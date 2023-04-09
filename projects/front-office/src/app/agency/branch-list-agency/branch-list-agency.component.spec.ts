import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchListAgencyComponent } from './branch-list-agency.component';

describe('BranchListAgencyComponent', () => {
  let component: BranchListAgencyComponent;
  let fixture: ComponentFixture<BranchListAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchListAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchListAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
