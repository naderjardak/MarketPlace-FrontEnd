import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent as sellerlayoutC} from './seller/layout/app.layout.component';
import { AppLayoutComponent as freelancerlayoutC} from './freelancer/layout/app.layout.component';
import { AppLayoutComponent as agencylayoutC} from './agency/layout/app.layout.component';
import { AppLayoutComponent as sellerlayoutCMohsen} from './sellerMohsen/layout/app.layout.component';

import { NewProductComponent } from './seller/new-product/new-product.component';
import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent as addpickupseller } from './sellerMohsen/add-pickup/add-pickup.component';
import {HomeComponent} from "./front/buyer/home/home.component";
import {CartComponent} from "./front/buyer/cart/cart.component";

import { StoreListComponent } from './sellerMohsen/store-list/store-list.component';
import { ListOfStoreComponent } from './sellerMohsen/list-of-store/list-of-store.component';
import { OrderListMComponent } from './sellerMohsen/order-list-m/order-list-m.component';
import { PickupListComponent as PickupListSeller } from './sellerMohsen/pickup-list/pickup-list.component';
import { PickupUpdateComponent } from './sellerMohsen/pickup-update/pickup-update.component';
import { DashboardAgencyComponent } from './agency/dashboard-agency/dashboard-agency.component';
import { RequestAgencyComponent } from './agency/request-agency/request-agency.component';
import { DashboardFreelancerComponent } from './freelancer/dashboard-freelancer/dashboard-freelancer.component';
import { PickupListFreelancerComponent } from './freelancer/pickup-list-freelancer/pickup-list-freelancer.component';
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
import { ProductListComponent } from './seller/product-list/product-list.component';

import {ProductDetailsComponent} from "./front/buyer/product-details/product-details.component";
import {ShopSideComponent} from "./front/buyer/shop-side/shop-side.component";
import {FinalizeOrderComponent} from "./front/buyer/finalize-order/finalize-order.component";
import {AddressBookComponent} from "./front/buyer/orders-setting/address-book/address-book.component";
import {OrdersSettingComponent} from "./front/buyer/orders-setting/orders-setting.component";

import { SignInComponent } from './front/User/sign-in/sign-in.component';
import { RegisterComponent } from './front/User/register/register.component';



const routes: Routes = [
  {
    path:'freelancer',component:freelancerlayoutC,
    children:[
      {path:'',component:DashboardFreelancerComponent},
      {path:'pickups',component:PickupListFreelancerComponent},
      {path:'requests',component:RequestListComponent},
      {path:'myPickups',component:MyPickupListFreelancerComponent},
      {path:'myPickups/track/:idPickup',component:TrakOrderByFreelancerComponent}

    ]
  },
  {
    path:'store',component:sellerlayoutC,
    children:[
      {path:'',component:SellerDashComponent},
      {path:'prods',component:NewProductComponent},
      {path:'MyStore',component:StoreListComponent},
      {path:'list',component:ProductListComponent}
    ]
},
{
  path:'agency',component:agencylayoutC,
  children:[
    {path:'',component:DashboardAgencyComponent},
    {path:'Pickups',component:PickupListComponent},
    {path:'Requests',component:RequestAgencyComponent},
    {path:'addBranch',component:AddBranchComponent},
    {path:'MyBranch',component:BranchListAgencyComponent},
    {path:'MyBranch/:idBranch',component:AddDeliveryMenAgencyComponent},
    {path:'BranchM',component:BranchManagementComponent},
    {path:'BranchM/:idBranch',component:DeliveryMListAgencyComponent},
    {path:'MyPickups',component:MyPickupListAgencyComponent},
    {path:'MyPickups/track/:idPickup',component:TrackOrderByAgencyComponent}
   ]
},

  {path:'buyer',component:HomeComponent},
  {path: 'buyer/cart', component: CartComponent},
  {path: 'buyer/details/:id', component: ProductDetailsComponent},
  {path: 'buyer/shop-side', component: ShopSideComponent},
  {path: 'buyer/cart/finaliseOrder', component: FinalizeOrderComponent},
  {path: 'buyer/Orders', component: OrdersSettingComponent},


{ path: '', component: HomeComponent },
{ path: 'user/signin', component: SignInComponent },
{ path: 'user/register', component: RegisterComponent },

/*{
  path:'user',component:HomeComponent,
  children:[
    { path: '', component: SignInComponent },
    { path: 'user/signin', component: SignInComponent },
    { path: 'user/register', component: RegisterComponent }
  ]
},
*/

{
  path:'Seller',component:sellerlayoutCMohsen,
  children:[
    { path:'DashboardDelivery', component: StoreListComponent },
    {path:'stores',component:ListOfStoreComponent},
    {path:'stores/orders/:idStore',component:OrderListMComponent},
    {path:'stores/orders/:idStore/:idOrder',component:addpickupseller},
    {path:'pickups',component:PickupListSeller},
    {path:'pickups/requests/:idP',component:RequestListSellerComponent},
    {path:'pickups/update/:idPickup',component:PickupUpdateComponent},
    {path:'pickupsInProgress',component:PikupInProgressSellerComponent},
    {path:'pickupsInProgress/:CodePickup',component:TrakingPickupSellerComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
