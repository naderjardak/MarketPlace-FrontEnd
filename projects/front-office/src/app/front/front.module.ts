import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Utils/header/header.component';
import { HomeComponent } from './buyer/home/home.component';
import { CartComponent } from './buyer/cart/cart.component';
import { FooterComponent } from './Utils/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductDetailsComponent} from "./buyer/product-details/product-details.component";
import { ShopSideComponent } from './buyer/shop-side/shop-side.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {AutocompleteLibModule} from "angular-ng-autocomplete";
import {FinalizeOrderComponent} from "./buyer/finalize-order/finalize-order.component";
import { NotFoundComponent } from './Utils/not-found/not-found.component';
import { AllOrdrsComponent } from './buyer/orders-setting/all-ordrs/all-ordrs.component';
import { AddressBookComponent } from './buyer/orders-setting/address-book/address-book.component';
import { OrdersSettingComponent } from './buyer/orders-setting/orders-setting.component';
import { TrackOrderComponent } from './buyer/orders-setting/track-order/track-order.component';
import { RegisterComponent } from './User/register/register.component';
import { SignInComponent } from './User/sign-in/sign-in.component';







@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    CartComponent,
    FooterComponent,
    ProductDetailsComponent,
    ShopSideComponent,
    FinalizeOrderComponent,
    NotFoundComponent,
    AllOrdrsComponent,
    AddressBookComponent,
    OrdersSettingComponent,
    TrackOrderComponent,
    RegisterComponent,
    SignInComponent
],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule
   // AutocompleteLibModule
  ]
})
export class FrontModule { }
