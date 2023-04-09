import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from "@angular/router";
import {HomeService} from "../../services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Order} from "../../../../../../../../Models/Order";
import {PaymentType} from "../../../../../../../../Models/Enum/PaymentType";
import {StatusOrderType} from "../../../../../../../../Models/Enum/StatusOrderType";

@Component({
  selector: 'app-all-ordrs',
  templateUrl: './all-ordrs.component.html',
  styleUrls: ['./all-ordrs.component.scss']
})
export class AllOrdrsComponent {

  constructor(private router : Router,private home:HomeService,private snackBar: MatSnackBar,private cdr: ChangeDetectorRef) {
  }

  selectedOption: string = "All Orders";
  orderList!:Order[];
  cash:number=0;
  card:number=0;
  cancled:number=0;
  allOrdersCount:number=0;
  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }
  gotoCart()
  {
    this.router.navigate(["/buyer/cart"]);
  }


  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }

  ngOnInit()
  {

    this.home.getAllOrdersByUserId().subscribe(data=>{this.orderList=data;
    for (let i=0;i<this.orderList.length;i++)
    {
      if(this.orderList[i].status==StatusOrderType.ACCEPTED_PAYMENT) {
        this.allOrdersCount+=1;
        if (this.orderList[i].payment == PaymentType.CASH_ON_DELIVERY)
          this.cash += 1;
        else if (this.orderList[i].payment == PaymentType.BANK_CARD)
          this.card += 1;
      }else
        this.cancled+=1;
    }
    })
  }


  filterOrders(event: any) {
    this.home.getAllOrdersByUserId().subscribe(data=>{this.orderList=data;
    this.selectedOption = event.target.value;

    const today = new Date();
    const fifteenDaysAgo = new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sixMonthsAgo = new Date(today.getTime() - 6 * 30 * 24 * 60 * 60 * 1000);

    switch(this.selectedOption) {
      case "Last 5 orders":
        this.orderList = this.orderList.slice(0, 5);
        this.cdr.detectChanges();
        break;
      case "Last 15 days":
        this.orderList = this.orderList.filter(order => new Date(order.creationDate) > fifteenDaysAgo);
        this.cdr.detectChanges();
        break;
      case "Last 30 days":
        this.orderList = this.orderList.filter(order => new Date(order.creationDate) > thirtyDaysAgo);
        this.cdr.detectChanges();

        break;
      case "Last 6 months":
        this.orderList = this.orderList.filter(order => new Date(order.creationDate) > sixMonthsAgo);
        this.cdr.detectChanges();
        break;
      case "All Orders":
        this.home.getAllOrdersByUserId().subscribe(data=>{
          this.orderList=data;
          this.cdr.detectChanges();})
        break;
      default:
        break;
    }
    });
  }

}
