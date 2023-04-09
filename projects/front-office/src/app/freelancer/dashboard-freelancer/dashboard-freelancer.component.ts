import { Component } from '@angular/core';
import { User } from 'Models/User';
import { PickupService } from '../../sellerMohsen/servicesM/pickup.service';

@Component({
  selector: 'app-dashboard-freelancer',
  templateUrl: './dashboard-freelancer.component.html',
  styleUrls: ['./dashboard-freelancer.component.scss']
})
export class DashboardFreelancerComponent {
  constructor(private pickupService:PickupService){}
  ngOnInit(){
    this.countPickupDeliveredForfreelancer();
    this.countPickupOnTheWayForfreelancer();
    this.GetUser();
    this.SumPricePickupDeliveredByFreelancerToday();
    this.countPickupRefundedForfreelancer();
    this.countPickupReturnedForfreelancer();
    this.countRequestApprovedFreelancer();
    this.countRequestRejectedFreelancer();
  }
  crrf!:number;
  countRequestRejectedFreelancer(){
       this.pickupService.countRequestRejectedFreelancer().subscribe(data=>{this.crrf=data});
   }
   craf!:number;
   countRequestApprovedFreelancer(){
    this.pickupService.countRequestApprovedFreelancer().subscribe(data=>{this.craf=data});
   }
   sppf!:number;
   SumPricePickupDeliveredByFreelancerToday(){
    this.pickupService.SumPricePickupDeliveredByFreelancerToday().subscribe(data=>{this.sppf=data});
   }
   cpdf!:number;
   countPickupDeliveredForfreelancer(){
    this.pickupService.countPickupDeliveredForfreelancer().subscribe(data=>{this.cpdf=data});
   }
   cpof!:number;
   countPickupOnTheWayForfreelancer(){
    this.pickupService.countPickupOnTheWayForfreelancer().subscribe(data=>{this.cpof=data});
   }
   cpref!:number;
   countPickupRefundedForfreelancer(){
    this.pickupService.countPickupRefundedForfreelancer().subscribe(data=>{this.cpref=data});
   }
   cprf!:number;
   countPickupReturnedForfreelancer(){
    this.pickupService.countPickupReturnedForfreelancer().subscribe(data=>{this.cprf=data});
   }
   user!:User;
   GetUser(){
    this.pickupService.getUser().subscribe(data=>{console.log(this.user); this.user=data});
  }

}
