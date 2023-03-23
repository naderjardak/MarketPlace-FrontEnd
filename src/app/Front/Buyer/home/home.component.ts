import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css','../../../../assets/FrontTemplate/css/vendor.css','../../../../../assets/FrontTemplate/css/utility.css','../../../../../assets/FrontTemplate/css/app.css']
})
export class HomeComponent {
constructor(private router : Router) {
}
goToCart()
{
  this.router.navigate(["/cart"])
}
}
export class AppModule { }
