import { Component } from '@angular/core';
import { PickupService } from '../servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';

@Component({
  selector: 'app-pikup-in-progress-seller',
  templateUrl: './pikup-in-progress-seller.component.html',
  styleUrls: ['./pikup-in-progress-seller.component.scss']
})
export class PikupInProgressSellerComponent {
constructor(private pickupService:PickupService){}
ngOnInit(){
  this.RetrievePickupInProgress();
}
pickup!:Pickup[];
RetrievePickupInProgress(){
  this.pickupService.RetrievePickupInProgress().subscribe(data=>{this.pickup=data});
}
}
