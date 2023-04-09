import { Component } from '@angular/core';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';
import { Request } from 'Models/Request';

@Component({
  selector: 'app-my-pickup-list-agency',
  templateUrl: './my-pickup-list-agency.component.html',
  styleUrls: ['./my-pickup-list-agency.component.scss']
})
export class MyPickupListAgencyComponent {
constructor(private requestService:RequestService){}

ngOnInit(){
  this.retrieveRequestApprovedOfPickupAgency();
}

request!:Request[];
retrieveRequestApprovedOfPickupAgency(){
  this.requestService.retrieveRequestApprovedOfPickupAgency().subscribe(data=>{this.request=data});
}
}
