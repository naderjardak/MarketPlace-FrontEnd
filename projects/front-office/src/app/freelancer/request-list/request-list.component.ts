import { Component } from '@angular/core';
import { Request } from 'Models/Request';
import { RequestService } from '../../sellerMohsen/servicesM/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent {
  constructor(private requestService:RequestService){}
  ngOnInit(){
    this.RetrieveRequestByFreelancer();
  }
  request!:Request[];
  RetrieveRequestByFreelancer(){
    this.requestService.RetrieveRequestByFreelancer().subscribe(data=>{this.request=data});
   }
   DeleteRequest(idRequest:number){
    this.requestService.DeleteRequest(idRequest).subscribe(() => {
      // Call the method to refresh the table data
      this.RetrieveRequestByFreelancer();
      // Show a notification to indicate the pickup was deleted successfully
    });
   }
}
