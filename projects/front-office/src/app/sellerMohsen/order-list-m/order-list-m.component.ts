import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'Models/Order';
import { Product } from 'Models/Product';
import { ProductQuantity } from 'Models/ProductQuantity';
import { forkJoin } from 'rxjs';
import { PickupService } from '../servicesM/pickup.service';

@Component({
  selector: 'app-order-list-m',
  templateUrl: './order-list-m.component.html',
  styleUrls: ['./order-list-m.component.scss']
})
export class OrderListMComponent {
  constructor(private pickupService:PickupService,private http:HttpClient,private route: ActivatedRoute){}
  order!:Order[];
  idStore!: number;
  productQuantity!:ProductQuantity[];
  id!:number;
  product:Product[] = [];
  SumProduct:number[] = [];
  ngOnInit(): void {
    this.id=this.route.snapshot.params['idStore'];
    this.getOrdersByStore(this.id); // Replace 1 with the actual store ID
    this.getAllproductQuantity();
     // Read idStore parameter from URL and assign to idStore property
     this.route.paramMap.subscribe(params => {
      const idStoreParam = params.get('idStore');
      if (idStoreParam !== null) {
        this.idStore = parseInt(idStoreParam);
      } else {
        console.log("idStoreParam is null");
      }
    });
  }
  getOrdersByStore(ido: number): void {
    this.pickupService.getOrderByStore(ido)
      .subscribe(data => { this.order= data;
        const requests=data.map(a=>this.pickupService.getSumPriceProductOfOrder(a.id,this.idStore));
        forkJoin(requests).subscribe((results: number[]) => {
          this.SumProduct = results;
        });
      } );
          }

          getListProductOfOrder(idOrder:number, idStore:number) {
            this.pickupService.getListProductOfOrder(idOrder, idStore).subscribe((res) => {
              for (let i = 0; i < res.length; i++) {
                this.product.push(res[i]);
              }
            });
          }
          getSumPriceProductOfOrder(idOrder:number,idStore:number)
          {
            this.pickupService.getSumPriceProductOfOrder(idOrder,idStore).subscribe(data=>{this.SumProduct.push(data)});
          }

          getAllproductQuantity(){
            this.pickupService.getAllproductQuantity().subscribe(data=>{this.productQuantity=data})
                    }
}
