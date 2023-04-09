import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSettingComponent } from './orders-setting.component';

describe('OrdersSettingComponent', () => {
  let component: OrdersSettingComponent;
  let fixture: ComponentFixture<OrdersSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
