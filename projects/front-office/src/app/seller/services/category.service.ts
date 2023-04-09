import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http:HttpClient) { }

  url="http://localhost:8081/";

  getAllCategories(){
    const options = { withCredentials: true };
    return this.http.get<any>(this.url+'productCategory/GetAllProductCategories',options)
  }
  getAllSubCategories(){
    const options = { withCredentials: true };
    return this.http.get<any>(this.url+'productCategory/GetAllProductSubCategories',options)
  }
}
