import { Component } from '@angular/core';
import { RequestService } from '../servicesM/request.service';
import { Request } from 'Models/Request';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-list-seller',
  templateUrl: './request-list-seller.component.html',
  styleUrls: ['./request-list-seller.component.scss']
})
export class RequestListSellerComponent {

constructor(private requestService:RequestService,private r:ActivatedRoute,private route:Router){}
request!:Request[];
request1!:Request;
idPickup!:number;
idRequest!:number;
statusRequest!:"test";
ngOnInit(){
  this.idPickup=this.r.snapshot.params["idP"];
this.retrieveRequestByPickup(this.idPickup);
}
retrieveRequestByPickup(idPickup:number){
this.requestService.retrieveRequestByPickup(idPickup).subscribe(data=>{this.request=data});
}
/*
assignRequesttoseller(idRequest:number,statusRequest:String,idPickup:number){
  this.requestService.assignRequesttoseller().subscribe();
}*/
addForm(_t51: NgForm) {
   this.request1=new Request;
   this.idRequest = _t51.controls["ir"].value;
   this.requestService.assignRequesttoseller(this.idRequest,this.statusRequest,this.idPickup).subscribe(data=>{this.request1=data;this.route.navigateByUrl('/Seller/pickupsInProgress')});
   console.log(this.idRequest);
  }
}
