import { Component } from '@angular/core';
import { User } from 'Models/User';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';

@Component({
  selector: 'app-dashboard-agency',
  templateUrl: './dashboard-agency.component.html',
  styleUrls: ['./dashboard-agency.component.scss']
})
export class DashboardAgencyComponent {
  constructor(private pickupService:PickupService){}
  user!:User;
ngOnInit(){
  this.GetUser()
  this.countRequestRejectedTodayAgency();
  this.countRequestApprovedTodayAgency();
  this.countDeliveryMenInAllAgencyBranchesForAgench();
  this.countAgencyBranchesInAgency();
  this.countRequestTotalForAgencyPending();
  this.countRequestRejectForAgency();
  this.countRequestApprovedForAgency();
  this.countPickupDeliveredForAgency();
  this.countPickupOnTheWayForAgency();
  this.countPickupRefundedForAgency();
  this.countPickupReturnedForAgency();
}

  GetUser(){
    this.pickupService.getUser().subscribe(data=>{this.user=data});
  }
  nbrrta!:number;
  countRequestRejectedTodayAgency(){
       this.pickupService.countRequestRejectForAgency().subscribe(data=>{this.nbrrta=data});
   }
   nbarta!:number;
   countRequestApprovedTodayAgency(){
    this.pickupService.countRequestApprovedTodayAgency().subscribe(data=>{this.nbarta=data});

   }
   nbd!:number;

   countDeliveryMenInAllAgencyBranchesForAgench(){
    this.pickupService.countDeliveryMenInAllAgencyBranchesForAgench().subscribe(data=>{this.nbd=data});

   }
   nbba!:number;

   countAgencyBranchesInAgency(){
    this.pickupService.countAgencyBranchesInAgency().subscribe(data=>{this.nbba=data});

   }
   nbrtp!:number;

   countRequestTotalForAgencyPending(){
    this.pickupService.countRequestTotalForAgencyPending().subscribe(data=>{this.nbrtp=data});

   }
   nbrrtara!:number;

   countRequestRejectForAgency(){
    this.pickupService.countRequestRejectForAgency().subscribe(data=>{this.nbrrtara=data});

   }
   nbrra!:number;

   countRequestApprovedForAgency(){
    this.pickupService.countRequestApprovedForAgency().subscribe(data=>{this.nbrra=data});

   }
   nbrrtad!:number;

   countPickupDeliveredForAgency(){
    this.pickupService.countPickupDeliveredForAgency().subscribe(data=>{this.nbrrtad=data});

   }
   nbrrtda!:number;

   countPickupOnTheWayForAgency(){
    this.pickupService.countPickupOnTheWayForAgency().subscribe(data=>{this.nbrrtda=data});

   }
   nbrarta!:number;

   countPickupRefundedForAgency(){
    this.pickupService.countPickupRefundedForAgency().subscribe(data=>{this.nbrarta=data});

   }
   nbrrdta!:number;

   countPickupReturnedForAgency(){
    this.pickupService.countPickupReturnedForAgency().subscribe(data=>{this.nbrrdta=data});

   }
}
