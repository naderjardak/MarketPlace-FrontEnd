import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Front/Buyer/home/home.component'
import {CartComponent} from "./Front/Buyer/cart/cart.component";
import {ProductDetailsComponent} from "./Front/Buyer/product-details/product-details.component";
import {NotFoundComponent} from "./Front/not-found/not-found.component";
import {SignInComponent} from "./Front/User/sign-in/sign-in.component";

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"cart",component:CartComponent},
                        {path:"details",component:ProductDetailsComponent},
                        {path:"SignIn",component:SignInComponent},
                        {path:"**",component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
