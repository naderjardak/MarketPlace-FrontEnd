import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layoutB/app.layout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import {OrderStatsComponent} from "./order/order-stats/order-stats.component";

const routes: Routes = [

  {
    path:'',component:AppLayoutComponent,
    children:[
      {path:'',component:UserDashboardComponent},
      {path:'userlist',component:UserListComponent}

    ]
},{
    path:'',component:AppLayoutComponent,
    children:[
      {path:'orders-stats',component:OrderStatsComponent}
      ]
},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
