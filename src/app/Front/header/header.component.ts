import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css','../../../assets/FrontTemplate/css/vendor.css','../../../../assets/FrontTemplate/css/utility.css','../../../../assets/FrontTemplate/css/app.css']
})
export class HeaderComponent {
  constructor(private router : Router) {
  }
  goToCart()
  {
    this.router.navigate(["/cart"])
  }
}
