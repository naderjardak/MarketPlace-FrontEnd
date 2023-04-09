import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Order} from "../../../../../../../Models/Order";
import {StatusOrderType} from "../../../../../../../Models/Enum/StatusOrderType";
import {PaymentType} from "../../../../../../../Models/Enum/PaymentType";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";

@Component({
  selector: 'app-orders-setting',
  templateUrl: './orders-setting.component.html',
  styleUrls: ['./orders-setting.component.scss']
})
export class OrdersSettingComponent {
  constructor(private router : Router,private home:HomeService,private snackBar: MatSnackBar,private cdr: ChangeDetectorRef) {
  }

  ao=1;
  ab=0;
  mrc=0;
  to=0;

  orderList!:Order[];
  cash:number=0;
  card:number=0;
  cancled:number=0;
  allOrdersCount:number=0;
  request!:ProductQuantity[];
  requestOrder!: Order;

  getListProduct(){
    this.home.loadPosts().subscribe(data =>{this.request=data;});
  }

  getBaskerOrder() {
    this.home.loadOrder().subscribe(data => {
      this.requestOrder = data
    })
  }

  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }
  gotoCart()
  {
    if (this.request.length>0)
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
    this.getListProduct();
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
      };
    })
  }

  change(ao:number,ab:number,mrc:number)
{
  if((ao==1 || ab==1 || mrc==1) || this.request.length>0) {
    this.ao = ao;
    this.ab = ab;
    this.mrc = mrc;
  }
}



}
