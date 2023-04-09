import { Component } from '@angular/core';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { Pickup } from 'Models/Pickup';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';
import { Request } from 'Models/Request';

@Component({
  selector: 'app-my-pickup-list-freelancer',
  templateUrl: './my-pickup-list-freelancer.component.html',
  styleUrls: ['./my-pickup-list-freelancer.component.scss']
})
export class MyPickupListFreelancerComponent {
constructor(private pickupService:PickupService,private requestService:RequestService){}
pickup!:Pickup[];
request!:Request[];
ngOnInit(){
  this.retrievePickupByDeliveryMenFreelancer();
  this.retrieveRequestApprovedOfPickupFreelancer();
}
retrievePickupByDeliveryMenFreelancer(){
  this.pickupService.retrievePickupByDeliveryMenFreelancer().subscribe(data=>{this.pickup=data;});
}
retrieveRequestApprovedOfPickupFreelancer(){
 this.requestService.retrieveRequestApprovedOfPickupFreelancer().subscribe(data=>(this.request=data));
}
}
