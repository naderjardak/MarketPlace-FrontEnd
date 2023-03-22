import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Buyer/cart/cart.component';
import { HomeComponent } from './Buyer/home/home.component';
import { PickUpListComponent } from './Delivery/pick-up-list/pick-up-list.component';
import { ProductDetailsComponent } from './Buyer/product-details/product-details.component';
import {HeaderComponent} from "./header/header.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SignInComponent} from "./User/sign-in/sign-in.component";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    PickUpListComponent,
    ProductDetailsComponent,
    HeaderComponent,
    NotFoundComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
