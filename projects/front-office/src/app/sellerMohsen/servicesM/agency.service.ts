import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgencyBranch } from 'Models/AgencyBranch';
import { AgencyDeliveryMan } from 'Models/AgencyDeliveryMan';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http:HttpClient) { }
  //agency Delivery Men
  //url
urlretrieveDeliveryMenTOPickup="http://localhost:8081/AgencyDeliveryMan/RetrieveDeliverymenByagencyWhenThegovernorateOfPickupisSomeGovernorateofdeliverymen?idPickup=";

  retrieveDeliveryMenTOPickup(idPickup:number){
    const options = { withCredentials: true };
     return this.http.get<AgencyDeliveryMan[]>(this.urlretrieveDeliveryMenTOPickup+`${idPickup}`,options);
  }
   assignBranchToAgency(agencyBranch:AgencyBranch){
    const options = { withCredentials: true };
   return this.http.post<AgencyBranch>('http://localhost:8081/AgencyBranch/AssignBranchManByDeliveryAgency',agencyBranch,options);
   }
   retrieveAgencyBranchOfUser(){
    const options = { withCredentials: true };
    return this.http.get<AgencyBranch[]>("http://localhost:8081/AgencyBranch/retrieveAgencyBranchOfUser",options);
   }
   urlAssignAgencyDeliveryManByBranch="http://localhost:8081/AgencyDeliveryMan/AssignAgencyDeliveryManByBranch?Id=";
   AssignAgencyDeliveryManByBranch(adm:AgencyDeliveryMan,idBranch:number){
    const options = { withCredentials: true };
    return this.http.post<AgencyDeliveryMan>(this.urlAssignAgencyDeliveryManByBranch+`${idBranch}`,adm,options);
   }
   urlcountDeliveryMenInAgency="http://localhost:8081/AgencyBranch/countDeliveryMenInAgency?idBranch=";
   countDeliveryMenInAgency(idBranch:number){
    const options = { withCredentials: true };
    return this.http.get<number>(this.urlcountDeliveryMenInAgency+`${idBranch}`,options)
   }
   urldeleteAgencyBranch="http://localhost:8081/AgencyBranch/DeleteAgencyBranch?id=";
   deleteAgencyBranch(idBranch:number){
    const options = { withCredentials: true };
    return this.http.delete<AgencyBranch>(this.urldeleteAgencyBranch+`${idBranch}`,options)
   }
   urlRetrieveDeliveryMenByBranch="http://localhost:8081/AgencyDeliveryMan/RetrieveDeliveryMenByBranch?idBranch=";
   RetrieveDeliveryMenByBranch(idBranch:number){
    const options = { withCredentials: true };
    return this.http.get<AgencyDeliveryMan[]>(this.urlRetrieveDeliveryMenByBranch+`${idBranch}`,options);
   }
   urlcountDeliveryMenInBranch="http://localhost:8081/AgencyDeliveryMan/countDeliveryMenInBranch?idBranch=";
   countDeliveryMenInBranch(idBranch:number){
    const options = { withCredentials: true };
    return this.http.get<number>(this.urlcountDeliveryMenInBranch+`${idBranch}`,options)
   }
}
