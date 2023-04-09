import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';
import { RequestStatus } from 'Models/Enum/RequestStatus';
import { Pickup } from 'Models/Pickup';
import { Request, Request as re } from 'Models/Request';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-pickup-list',
  templateUrl: './pickup-list.component.html',
  styleUrls: ['./pickup-list.component.scss']
})
export class PickupListComponent {
  constructor(private pickupService:PickupService,private http: HttpClient,private requestService:RequestService,private agencyService:AgencyService,private route:ActivatedRoute,private r:Router){}
  idPickup!:number;
  ngOnInit(){
   this.RetrievePickupBetweenAgencyAndstore();
  };

  request1!: re;
  DeliveryManId!:number;
  addForm(_t77:NgForm){
    this.request1=new re;
    const selectedDeliveryManId = this.DeliveryManId;
    this.request1.requestStatus=RequestStatus.PENDING;
    this.requestService.AssignRequestDeliveryManToPickup(this.request1,selectedDeliveryManId,this.idPickup).subscribe(res =>{console.log('Request created');});
    window.location.href = 'http://localhost:4200/agency/Requests';
  };
 pickup!:Pickup[];
 RetrievePickupBetweenAgencyAndstore(){
        this.pickupService.RetrievePickupBeTAgencyAndStore().subscribe(data=>{this.pickup=data})
 };

deliveryMen!:AgencyDeliveryMan[];
getDeliveryManByPickup(idPickup:number){
  this.agencyService.retrieveDeliveryMenTOPickup(idPickup).subscribe(data=>{this.deliveryMen=data})
  this.idPickup=idPickup;
};
assignRequestDeliveryMenFreelancerandPickup(r:Request,idPickup:number){
 this.requestService.assignRequestDeliveryMenFreelancerandPickup(this.request1,this.idPickup).subscribe();
}
}
