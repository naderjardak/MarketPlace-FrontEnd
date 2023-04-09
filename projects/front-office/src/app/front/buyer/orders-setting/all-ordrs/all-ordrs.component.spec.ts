import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOrdrsComponent } from './all-ordrs.component';

describe('AllOrdrsComponent', () => {
  let component: AllOrdrsComponent;
  let fixture: ComponentFixture<AllOrdrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOrdrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllOrdrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
