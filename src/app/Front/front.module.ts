import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "../app.component";
import {CartComponent} from "./Buyer/cart/cart.component";
import {HomeComponent} from "./Buyer/home/home.component";
import {PickUpListComponent} from "./Delivery/pick-up-list/pick-up-list.component";
import {ProductDetailsComponent} from "./Buyer/product-details/product-details.component";
import {HeaderComponent} from "./header/header.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {SignInComponent} from "./User/sign-in/sign-in.component";
import {FooterComponent} from "./footer/footer.component";


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    PickUpListComponent,
    ProductDetailsComponent,
    HeaderComponent,
    NotFoundComponent,
    SignInComponent,
    FooterComponent],
  imports: [
    CommonModule
  ]
})
export class FrontModule {
}
