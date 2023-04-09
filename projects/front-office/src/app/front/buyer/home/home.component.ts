import { Component } from '@angular/core';
import {Product} from "../../../../../../../Models/Product";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import { EventModel} from "../../../../../../../Models/EventModel";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router : Router,private home:HomeService,private cookieService: CookieService) {
  }

  countdowns: { [id: number]: { days: number, hours: number, minutes: number, seconds: number } } = {};
  updateCountdown(): void {
    for (let i = 0; i < this.ev.length; i++) {
      const now = new Date().getTime();
      const eventDate = this.ev[i].lastDate.getTime();
      let distance = eventDate - now;
      if (distance < 0) {
        distance = 0;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.countdowns[i] = { days, hours, minutes, seconds };
      console.log(this.countdowns[i]);
    }
  }



  pageSize = 8;
  currentPage = 1;

  getPageNumbers() {
    const pageCount = this.getPageCount();
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  getPageCount() {
    return Math.ceil(this.request.length / this.pageSize);
  }


  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.request.slice(startIndex, endIndex);
  }

  getFloor(integer: number): number {
    return Math.floor(integer);
  }

  countArray(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }

  gotoDetails(id:number)
  {
    this.router.navigate(["/buyer/details",id]);
  }

  sess:boolean=false;
  ngOnInit():void
  {
    this.eventDisplay();
    this.searchProduct(0,0,'','','','MOST_REQUESTED');
    this.lastVued();
    this.home.sessionReteurn().subscribe(data=>{this.sess=data;if(this.sess){
      this.lastVued();
    }})

  }

  isLoading = false;
  loadData() {
    this.isLoading = true;
    // simulate loading data
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }

  request!:Product[];
  ev!:EventModel[];
  private e: EventModel | undefined;
  Vued:Product[]=[];

  lastVued()
  {
    this.home.lastVude().subscribe(data =>{this.Vued=data});
  }

  searchProduct(maxprix:number,minprix:number,nameProd:string,mark:string,categorie:string,filtre:String)
  {
    this.home.searchProduct(maxprix,minprix,nameProd,mark,categorie,filtre).subscribe(data =>{this.request=data;})
  }


  eventDisplay() {
    this.home.eventDisplay().subscribe(data => {this.ev = data;})
  };

  slideLeft() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    const container = document.querySelector('.slider-container')!;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }


}
