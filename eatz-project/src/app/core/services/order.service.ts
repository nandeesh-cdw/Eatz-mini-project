import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderMasterData } from '../model/order.model';
import { Observable} from 'rxjs';
import { ORDERSAPI} from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 readonly ORDERS_API !:string// Replace with your API URL

  constructor(private http: HttpClient) {
    this.ORDERS_API=ORDERSAPI;
  }
  /**
   * this method is used to get order data from the server
   * @returns data from api
   */
  getOrders():Observable<OrderMasterData>{
    return this.http.get(this.ORDERS_API) as Observable<OrderMasterData>;
  }
}