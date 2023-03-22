import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Buyer/cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HomeComponent } from './Buyer/home/home.component';
import { PickUpListComponent } from './Delivery/pick-up-list/pick-up-list.component';
import { ProductDetailsComponent } from './Buyer/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShippingComponent,
    HomeComponent,
    PickUpListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
