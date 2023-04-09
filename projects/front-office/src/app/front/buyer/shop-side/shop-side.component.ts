import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {HomeService} from "../services/home.service";
import {ProductCategory} from "../../../../../../../Models/ProductCategory";
import {Product} from "../../../../../../../Models/Product";


@Component({
  selector: 'app-shop-side',
  templateUrl: './shop-side.component.html',
  styleUrls: ['./shop-side.component.scss']
})
export class ShopSideComponent {
  constructor(private router: Router, private home: HomeService) {}

  products!:Product[];
  products1!:Product[];
  min!:number;
  max!:number;
  filt:string='MOST_REQUESTED';
  mark:string='';
  categorie:string='';
  inputName:string='';
  form:any={};
  rate:number=0;


  markList:String[]=[];

  categories!:ProductCategory[];

  pageSize = 8;
  currentPage = 1;

  sort:string='';

  isChecked: boolean = false;

  handleSubmit() {
    if (this.isChecked) {
      this.products = this.products.filter(product => product.deliveryPrice <= 0);
    } else {
      this.getAllProducts();
    }
  }



  sortProducts(sortOrder: string) {

      if (sortOrder === 'productPrice asc') {
        this.products.sort((a, b) => a.productPrice - b.productPrice);
      } else if (sortOrder === 'productPrice dsc')
        this.products.sort((a, b) => b.productPrice - a.productPrice);


      if (sortOrder === 'numberOfPurchase asc') {
        this.products.sort((a, b) => a.numberOfPurchase - b.numberOfPurchase);
      } else if (sortOrder === 'numberOfPurchase dsc')
        this.products.sort((a, b) => b.numberOfPurchase - a.numberOfPurchase);

        if (sortOrder === 'rating dsc') {
          this.products = this.products.filter(product => product.rating).sort((a, b) => b.rating - a.rating);
        }else if (sortOrder === 'rating asc')
          this.products = this.products.filter(product => product.rating).sort((a, b) => a.rating - b.rating);

        if (sortOrder === 'creationDate asc') {
          this.products.sort((a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime());
        } else if (sortOrder === 'creationDate dsc')
          this.products.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());


  }

  onChange1(event1: any) {
    this.sortProducts(event1.target.value);
  }





  onChange(event: any) {
    this.pageSize=event.target.value;
  }

  getPageNumbers() {
    const pageCount = this.getPageCount();
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  getPageCount() {
    return Math.ceil(this.products.length / this.pageSize);
  }


  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.products.slice(startIndex, endIndex);
  }

  getAllCategories()
  {
    this.home.getAllProductCategories().subscribe(data=>{this.categories=data;
    for (let i = 0; i < this.categories.length; i++) {
      let vr = false;
      for (let j = 0; j < this.categories[i].subCategory.length; j++) {
        if (this.categories[j].subCategory.indexOf(this.categories[i])) {
          vr = true;
        }
      }
      if (!vr) {
        this.categories.splice(1, i);
      }
    }});
  }

  getAllProducts()
  {
    this.max=this.form.max;
    this.min=this.form.min;
    this.home.searchProduct(this.max,this.min,this.inputName,this.mark,this.categorie,this.filt).subscribe(data=>{this.products=data;this.productsWithRating()});
  }

  getProducts()
  {
    this.max=this.form.max;
    this.min=this.form.min;
    this.home.searchProduct(0,0,'','',this.categorie,this.filt).subscribe(data=>{this.products1=data;
    for (let i=0;i<this.products1.length;i++)
    {
      if (this.markList.indexOf(this.products1[i].store.seller.brandName)==-1)
      {
        this.markList[this.markList.length]=this.products1[i].store.seller.brandName;
      }
    }
      this.productsWithRating()
    });

  }

  getFloor(integer: number): number {
    return Math.floor(integer);
  }
  countArray(n: number): number[] {
    return Array.from({length: n}, (_, index) => index + 1);
  }


  productsWithRating()
  {
    for (let i=0;i<this.products.length;i++)
    {
      if(this.products[i].rating<this.rate) {
        this.products.splice(i, 1);
      }
    }
  }

  setRate(rt:number)
  {
    this.rate=rt;
    this.getAllProducts();
    this.getProducts();
    this.productsWithRating();
  }


  gotoDetails(id:number)
  {
    this.router.navigate(["/buyer/details",id]);
  }

  vr!:boolean;
  ngOnInit() {
    this.form.max=0;
    this.form.min=0;
    this.getAllCategories()
    this.getAllProducts();
    this.getProducts();
    this.getCurrentPageItems();
    this.getPageCount();
    this.getPageNumbers();

  }



}
