import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'Models/Product';
import { Observable } from 'rxjs';
import {  ProductFormDTO} from 'Models/ProductFormDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductSreviceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8081/product/";

  getAllProductsBySeller(){
    const options = { withCredentials: true };
    return this.http.get(this.url+'retriveProductsByStore',options)
  }
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.url+'GetProductById?id='+id)
  }
  updateProduct(p:Product):Observable<Product>{
    return this.http.put<Product>(this.url+'UpdateProduct',p)

  }
  // deleteProduct(p:Product){
  //   return this.http.delete<Product>(this.url+'DeleteProduct',p.id)
  // }

  createAndAssignCategoryAndSubCategory(product: ProductFormDTO): Observable<Product> {
    const options = { withCredentials: true };

    return this.http.post<Product>(this.url+'CreateProductAndAssignCatAndSub',product,options)

}
}
