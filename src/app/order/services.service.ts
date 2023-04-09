import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RankGouvernoratOrderData} from "../../../Models/RankGouvernoratOrderData";
import { saveAs } from 'file-saver';
import {OrdersRankUsers} from "../../../Models/OrdersRankUsers";
import {StatusTypeStat} from "../../../Models/StatusTypeStat";
import {Order} from "../../../Models/Order";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
  }

  RankGouvernoratByOrdersNumber = "http://localhost:8081/orderStats/RankGouvernoratByOrdersNumber"
  OrderRankForUsersByStatusType = "http://localhost:8081/orderStats/OrderRankForUsersByStatusType"
  OrderStatsByStatusType="http://localhost:8081/orderStats/OrderStatsByStatusType"
  GetBestUserOrders="http://localhost:8081/orderStats/GetBestUserOrders"


    options = {withCredentials: true};
  option = {withCredentials: true, responseType: 'text'};
  option1 = {withCredentials: true, responseType: 'json'};


  rankGouvernoratByOrdersNumber() {
    return this.http.get<RankGouvernoratOrderData[]>(this.RankGouvernoratByOrdersNumber, this.options);
  }

  orderRankForUsersByStatusType()
  {
    return this.http.get<OrdersRankUsers[]>(this.OrderRankForUsersByStatusType,this.options);
  }

  orderStatsByStatusType()
  {
    return this.http.get<StatusTypeStat>(this.OrderStatsByStatusType,this.options);
  }

  getBestUserOrders()
  {
    return this.http.get<Order[]>(this.GetBestUserOrders,this.options);
  }
}
