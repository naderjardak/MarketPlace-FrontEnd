import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../../../../../../../Models/Product";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ProductQuantity} from "../../../../../../../Models/ProductQuantity";
import {CookieService} from "ngx-cookie-service";
import {Order} from "../../../../../../../Models/Order";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router, private home: HomeService, private snackBar: MatSnackBar, private ar: ActivatedRoute,private cookieService: CookieService, private sanitizer: DomSanitizer) {
  }



  product!: Product;
  idp!: number;
  da: any = {};
  url!: string;
  videoUrl!: SafeResourceUrl;
  len!: number;
  Vued!: Product[];
  quantityNumber: number = 1;
  productQuantity!: ProductQuantity;

  // Save the basket or cart information in cookies
  sess:boolean=false;
 basket:Order=new Order();
  ngOnInit() {

    this.home.sessionReteurn().subscribe(data=>{this.sess=data;
      this.idp = this.ar.snapshot.params['id'];
      this.home.addNewLastVuedProduct(this.idp).subscribe();
      this.home.getProductById(this.idp).subscribe(data => {
        this.product = data;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.product.videoLink);
        /*this.home.lastVude().subscribe(data => {
           this.Vued = data;

         });

         */
      });
    });
  }

  lastVued() {
    this.home.lastVude().subscribe(data => {
      this.Vued = data
    });
  }

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
    window.scroll(0,0);
  }


  gotoDetails(id: number) {
    this.router.navigate(["/buyer/details", id]).then(r =>this.refresh() );

  }

  updateQuantityNumber(nb: number) {
    if (this.product.quantity != 0)
      if ((nb == 1 && this.quantityNumber + nb <= this.product.quantity) || (nb == -1 && this.quantityNumber + nb >= 1))
        this.quantityNumber = this.quantityNumber + nb;
  }

  slideLeft() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  sum:number=0;
  weight:number=0;
  addProductToCart() {
    if (this.quantityNumber != 0) {
      this.productQuantity = new ProductQuantity(); // initialize productQuantity here
      this.productQuantity.quantity = this.quantityNumber;
      this.productQuantity.product = this.product;

      if (this.sess) {
        this.home.addProductToOrder(this.productQuantity).subscribe(() => {
          this.ngOnInit();
          this.refresh();
        });
      } else {

        if((this.cookieService.get('basket'))!='')
          this.basket=JSON.parse(this.cookieService.get('basket') || '{}');
        let verif=true;
        let foundIndex = -1; // to store index of existing productQuantity in basket

        for(let i=0;i<this.basket.productQuantities.length;i++)
        {
          if(this.basket.productQuantities[i].product.id==this.productQuantity.product.id)
          {
            verif=false;
            foundIndex = i; // store index of existing productQuantity in basket
            break;
          }
        }
        if(verif)
        {
          this.basket.productQuantities = this.basket.productQuantities.concat(this.productQuantity);
        } else {
          // if existing productQuantity is found, update its quantity
          this.basket.productQuantities[foundIndex].quantity += this.productQuantity.quantity;
        }

        // recalculate sum and weight based on updated basket
        this.sum = 0;
        this.weight = 0;

        for (const pq of this.basket.productQuantities) {
          this.sum += pq.quantity * pq.product.productPrice;
          this.weight += pq.quantity * pq.product.productWeight;
        }

        // update delivery price based on the updated weight
        if (this.weight <= 1) {
          this.basket.deliveryPrice = 6;
        } else if (this.weight <= 10) {
          this.basket.deliveryPrice = 6 * this.weight;
        } else {
          this.basket.deliveryPrice = 60 + (this.weight - 10) * 2;
        }
        this.basket.sum = this.sum;
        this.cookieService.set('basket', JSON.stringify(this.basket), {
          sameSite: 'None',
          secure: true,
          domain: 'localhost',
          path: '/'
        });
        this.refresh();
      }
    }
  }



  getFloor(integer: number): number {
    return Math.floor(integer);
  }
  countArray(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }
}
