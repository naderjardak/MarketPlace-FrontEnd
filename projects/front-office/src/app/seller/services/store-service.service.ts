import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from 'Models/Store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {


  constructor(private http:HttpClient) { }

  url="http://localhost:8081/store/";

  getStoresByUser(id:number):Observable<Store[]>{
    const options = { withCredentials: true };

    return this.http.get<Store[]>(this.url+"getStoresByUser?id="+id,options)
  }

}
