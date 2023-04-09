import { Component } from '@angular/core';
import { AgencyService } from '../../sellerMohsen/servicesM/agency.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';

@Component({
  selector: 'app-delivery-mlist-agency',
  templateUrl: './delivery-mlist-agency.component.html',
  styleUrls: ['./delivery-mlist-agency.component.scss']
})
export class DeliveryMListAgencyComponent {
 constructor(private agencyService:AgencyService,private r:Router,private route:ActivatedRoute){}
 ngOnInit(){
  this.idBranch=this.route.snapshot.params["idBranch"];
  this.RetrieveDeliveryMenByBranch(this.idBranch);
 }

idBranch!:number;

 dm!:AgencyDeliveryMan[];
 RetrieveDeliveryMenByBranch(idBranch:number){
this.agencyService.RetrieveDeliveryMenByBranch(idBranch).subscribe(data=>{this.dm=data})
}
}
