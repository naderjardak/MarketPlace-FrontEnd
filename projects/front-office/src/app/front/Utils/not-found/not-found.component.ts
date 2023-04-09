import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HomeService} from "../../buyer/services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private router : Router) {
  }
  gotoHome()
  {
    this.router.navigate(["/buyer"]);
  }
}
