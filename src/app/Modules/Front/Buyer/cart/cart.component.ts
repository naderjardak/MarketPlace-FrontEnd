import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css','../../../../../assets/FrontTemplate/css/vendor.css','../../../../../assets/FrontTemplate/css/utility.css','../../../../../assets/FrontTemplate/css/app.css']
})
export class CartComponent {
  constructor(private router : Router) {
  }
  goToCart()
  {
    this.router.navigate(["/cart"])
  }
}
