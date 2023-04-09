import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListMComponent } from './order-list-m.component';

describe('OrderListMComponent', () => {
  let component: OrderListMComponent;
  let fixture: ComponentFixture<OrderListMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderListMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
