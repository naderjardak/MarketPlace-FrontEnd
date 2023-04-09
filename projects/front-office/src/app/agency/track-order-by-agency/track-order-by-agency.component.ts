import { Component } from '@angular/core';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { ActivatedRoute } from '@angular/router';
import { Pickup } from 'Models/Pickup';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-track-order-by-agency',
  templateUrl: './track-order-by-agency.component.html',
  styleUrls: ['./track-order-by-agency.component.scss']
})
export class TrackOrderByAgencyComponent {
  constructor(private pickupService:PickupService,private r:ActivatedRoute){
  }
  ngOnInit(){
    this.idPickup=this.r.snapshot.params["idPickup"];
    this.RetrievePickupById(this.idPickup);
  }
  idPickup!:number;
  pickup!:Pickup;
  status!:String;
  addForm(tt:NgForm){
    this.status=tt.controls["typeOfGearr"].value;
    this.pickupService.ModifyStatusOfPickupByDelivery(this.status,this.idPickup).subscribe();
  }


  ModifyStatusOfPickupByDelivery(status:String,idPickup:number){
  this.pickupService.ModifyStatusOfPickupByDelivery(status,idPickup).subscribe();
  }
  RetrievePickupById(idPickup:number){
    this.pickupService.RetrievePickupById(idPickup).subscribe(data=>{this.pickup=data});
  }
  statusPickup= [
    'TAKED','ONTHEWAY','DELIVERED','RETURN','REFUNDED'
  ];
  }
