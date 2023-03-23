import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FrontModule} from "./Front/front.module";
import {BackModule} from "./Back/back.module";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontModule,
    BackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
