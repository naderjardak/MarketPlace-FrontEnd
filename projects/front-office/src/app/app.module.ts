import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule as sellerlayout } from './seller/layout/app.layout.module';
import { AppLayoutModule as freelancerlayout } from './freelancer/layout/app.layout.module';
import { AppLayoutModule as agencylayout } from './agency/layout/app.layout.module';
import { AppLayoutModule as sellerlayoutm } from './sellerMohsen/layout/app.layout.module';

import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { NewProductComponent } from './seller/new-product/new-product.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent, AddPickupComponent as addpickupseller} from './sellerMohsen/add-pickup/add-pickup.component';
import { PickupListComponent as PickupListSeller } from './sellerMohsen/pickup-list/pickup-list.component';

import {FormsModule, NgForm} from '@angular/forms';
import { StoreListComponent } from './sellerMohsen/store-list/store-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { ListOfStoreComponent } from './sellerMohsen/list-of-store/list-of-store.component';
import { OrderListMComponent } from './sellerMohsen/order-list-m/order-list-m.component';
import { PickupUpdateComponent } from './sellerMohsen/pickup-update/pickup-update.component';
import { DashboardAgencyComponent } from './agency/dashboard-agency/dashboard-agency.component';
import { RequestAgencyComponent } from './agency/request-agency/request-agency.component';
import { PickupListFreelancerComponent } from './freelancer/pickup-list-freelancer/pickup-list-freelancer.component';
import { DashboardFreelancerComponent } from './freelancer/dashboard-freelancer/dashboard-freelancer.component';
import { AddBranchComponent } from './agency/add-branch/add-branch.component';
import { BranchListAgencyComponent } from './agency/branch-list-agency/branch-list-agency.component';
import { AddDeliveryMenAgencyComponent } from './agency/add-delivery-men-agency/add-delivery-men-agency.component';
import { BranchManagementComponent } from './agency/branch-management/branch-management.component';
import { DeliveryMListAgencyComponent } from './agency/delivery-mlist-agency/delivery-mlist-agency.component';
import { RequestListSellerComponent } from './sellerMohsen/request-list-seller/request-list-seller.component';
import { PikupInProgressSellerComponent } from './sellerMohsen/pikup-in-progress-seller/pikup-in-progress-seller.component';
import { TrakingPickupSellerComponent } from './sellerMohsen/traking-pickup-seller/traking-pickup-seller.component';
import { MyPickupListFreelancerComponent } from './freelancer/my-pickup-list-freelancer/my-pickup-list-freelancer.component';
import { TrakOrderByFreelancerComponent } from './freelancer/trak-order-by-freelancer/trak-order-by-freelancer.component';
import { MyPickupListAgencyComponent } from './agency/my-pickup-list-agency/my-pickup-list-agency.component';
import { TrackOrderByAgencyComponent } from './agency/track-order-by-agency/track-order-by-agency.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './seller/product-list/product-list.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { ChipModule } from "primeng/chip";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import{	FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule} from "@angular/forms";
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from '@angular/material/chips';
import {COMMA, SPACE} from "@angular/cdk/keycodes";
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FrontModule  } from './front/front.module';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [
    AppComponent,
    SellerDashComponent,
    NewProductComponent,
    RequestListComponent,
    PickupListComponent,
    StoreListComponent,
    ListOfStoreComponent,
    OrderListMComponent,
    addpickupseller,
    PickupListSeller,
    PickupUpdateComponent,
    DashboardAgencyComponent,
    RequestAgencyComponent,
    PickupListFreelancerComponent,
    DashboardFreelancerComponent,
    AddBranchComponent,
    BranchListAgencyComponent,
    AddDeliveryMenAgencyComponent,
    BranchManagementComponent,
    DeliveryMListAgencyComponent,
    RequestListSellerComponent,
    PikupInProgressSellerComponent,
    TrakingPickupSellerComponent,
    MyPickupListFreelancerComponent,
    TrakOrderByFreelancerComponent,
    MyPickupListAgencyComponent,
    TrackOrderByAgencyComponent,
    AddPickupComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    sellerlayout,
    freelancerlayout,
    agencylayout,
    FrontModule,
    HttpClientModule,
    sellerlayoutm,
    MatMenuModule,
    NgxPaginationModule,
  	DataViewModule,
		InputTextModule,
		DropdownModule,
		ButtonModule,
    RatingModule,
    OrderListModule,
    PickListModule,
    AutoCompleteModule,
    CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		ColorPickerModule,
		CascadeSelectModule,
		MultiSelectModule,
		ToggleButtonModule,
		SliderModule,
		InputTextareaModule,
		RadioButtonModule,
		InputTextModule,
		RatingModule,
		ChipModule,
		KnobModule,
		InputSwitchModule,
		ListboxModule,
		SelectButtonModule,
		CheckboxModule,
		ButtonModule,
    FileUploadModule,
    RippleModule,
    SplitButtonModule,
    ToastModule,
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    BrowserModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [COMMA, SPACE]
      }
    },
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
