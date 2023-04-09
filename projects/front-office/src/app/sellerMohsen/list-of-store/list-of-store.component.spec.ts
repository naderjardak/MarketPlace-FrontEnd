import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfStoreComponent } from './list-of-store.component';

describe('ListOfStoreComponent', () => {
  let component: ListOfStoreComponent;
  let fixture: ComponentFixture<ListOfStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
