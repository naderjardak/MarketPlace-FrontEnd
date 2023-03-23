import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpListComponent } from './pick-up-list.component';

describe('PickUpListComponent', () => {
  let component: PickUpListComponent;
  let fixture: ComponentFixture<PickUpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickUpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickUpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
