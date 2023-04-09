import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSideComponent } from './shop-side.component';

describe('ShopSideComponent', () => {
  let component: ShopSideComponent;
  let fixture: ComponentFixture<ShopSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
