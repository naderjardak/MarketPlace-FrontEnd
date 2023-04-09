import { Component } from '@angular/core';
import { PickupService } from '../servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-traking-pickup-seller',
  templateUrl: './traking-pickup-seller.component.html',
  styleUrls: ['./traking-pickup-seller.component.scss']
})
export class TrakingPickupSellerComponent {
constructor(private pickupService:PickupService,private r:ActivatedRoute){

}
ngOnInit(){
  this.codePickup=this.r.snapshot.params["CodePickup"];
  this.TrakingPickupBySeller(this.codePickup);
}
codePickup!:number;
pickup!:Pickup;
TrakingPickupBySeller(codePickup:number){
this.pickupService.TrakingPickupBySeller(codePickup).subscribe(data=>{this.pickup=data});
}
}
