import {Product} from "./Product";
//import * as CircularJSON from 'circular-json';

export class ProductCategory{
  id!:number;
  name!:string;
  description!:string;
  products:Product[]=[];
  category!: ProductCategory;
  subCategory: ProductCategory[] = [];

  setCategory(category: ProductCategory) {
    this.category = category;
  }
}
