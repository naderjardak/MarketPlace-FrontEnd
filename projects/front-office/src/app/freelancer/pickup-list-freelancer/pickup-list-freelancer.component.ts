import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestStatus } from 'Models/Enum/RequestStatus';
import { Pickup } from 'Models/Pickup';
import { Request } from 'Models/Request';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-pickup-list-freelancer',
  templateUrl: './pickup-list-freelancer.component.html',
  styleUrls: ['./pickup-list-freelancer.component.scss']
})
export class PickupListFreelancerComponent {
  constructor(private pickupService:PickupService,private http: HttpClient,private requestService:RequestService,private route:ActivatedRoute,private r:Router){}
ngOnInit(){
  this.RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer();
}


request1!: Request;
idPickup!:number;
addForm(_t77:NgForm){
  this.request1=new Request;
  this.request1.requestStatus=RequestStatus.PENDING;
  this.requestService.assignRequestDeliveryMenFreelancerandPickup(this.request1,this.idPickup).subscribe();
  window.location.href = 'http://localhost:4200/freelancer/requests';
};

 pickup!:Pickup[];
 RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer(){
  this.pickupService.RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer().subscribe(data=>{this.pickup=data});

 }
 selectPickup(id: number) {
  this.idPickup = id;
}
}
