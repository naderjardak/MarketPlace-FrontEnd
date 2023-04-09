import { Component } from '@angular/core';
import { Store } from 'Models/Store';
import { PickupService } from '../servicesM/pickup.service';
import { DataView } from 'primeng/dataview';
import { SelectItem } from 'primeng/api';
import { User } from 'Models/User';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss','../../../assets/vendors/styles/core.css']
})
export class StoreListComponent {
  constructor(private pickupService:PickupService){}
  store!:Store[];
  user!:User;
ngOnInit(){
  this.GetUser()
  this.CountPickupDeliverted();
  this.CountPickupOnTheWay();
  this.CountPickupPending();
  this.CountPickupRefunbded();
  this.CountPickupReturned();

}

  GetUser(){
    this.pickupService.getUser().subscribe(data=>{this.user=data});
  }
  nbCountPickupPending!:number;
  nbCountPickupRefunbded!:number;
  nbCountPickupOnTheWay!:number;
  nbCountPickupDeliverted!:number;
  nbCountPickupReturned!:number;
   //Stat Count To Seller
   CountPickupPending(){
   this.pickupService.CountPickupPending().subscribe(data=>{this.nbCountPickupPending=data});

  }
  CountPickupRefunbded(){
    this.pickupService.CountPickupRefunbded().subscribe(data=>{this.nbCountPickupRefunbded=data});
  }
  CountPickupOnTheWay(){
    this.pickupService.CountPickupOnTheWay().subscribe(data=>{this.nbCountPickupOnTheWay=data});
  }
  CountPickupDeliverted(){
    this.pickupService.CountPickupDeliverted().subscribe(data=>{this.nbCountPickupDeliverted=data});
  }
  CountPickupReturned(){
    this.pickupService.CountPickupReturned().subscribe(data=>{this.nbCountPickupReturned=data});
  }

}
