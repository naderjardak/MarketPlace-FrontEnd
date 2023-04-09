import {Component} from '@angular/core';
import {HomeService} from "../services/home.service";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {Order} from "../../../../../../../Models/Order";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
/**
 * @title Snack-bar with configurable position
 */
export class CartComponent {

  request!: ProductQuantity[];
  requestOrder: Order = new Order();
  basket: Order = new Order();

  constructor(private router: Router, private home: HomeService, private snackBar: MatSnackBar, private cookieService: CookieService) {
  }

  gotoHome() {
    this.router.navigate(["/buyer"]);
  }

  gotoCart() {
    this.router.navigate(["/buyer/cart"]);
  }

  gotoFinalize() {
    this.home.sessionReteurn().subscribe(data => {
      this.sess = data;
      if (this.sess) {
        this.router.navigate(["buyer/cart/finaliseOrder"]);
      } else {
        this.router.navigate(["user/signin"]);
      }
    });
  }

  sess: boolean = false;

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }

  ngOnInit() {
    this.home.sessionReteurn().subscribe(data => {
      this.sess = data;
      if (this.sess) {
        this.getListProduct();
        this.getBaskerOrder();
      } else {
        this.basket = JSON.parse(this.cookieService.get('basket') || '{}');
        this.requestOrder = this.basket;
        this.request = this.requestOrder.productQuantities;
      }
    })
  }

  getListProduct() {
    this.home.loadPosts().subscribe(data => {
      this.request = data;
    });
  }


  getBaskerOrder() {
    this.home.loadOrder().subscribe(data => {
      this.requestOrder = data
    })
  }

  deleteCarte() {
    this.home.deleteCart().subscribe(() => {
      this.getListProduct();
      this.refresh();
    });

  }

  updateQuantity(ref: string, quan: number) {
    this.home.updateQuantity(ref, quan).subscribe(data => {
      console.log(data);
      this.refresh();
    })

  }

  deleteProductFromOrder(ref: string) {
    this.home.deleteProductFromOrder(ref).subscribe(() => {
      this.getListProduct();
      this.refresh();
    });
  }


}
