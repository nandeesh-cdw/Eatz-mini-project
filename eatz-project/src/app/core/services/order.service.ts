import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderMasterData } from '../model/order.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://run.mocky.io/v3/69cd6951-b66d-483f-bece-278ac4fd91a6'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getOrders():Observable<OrderMasterData>{
    return this.http.get(this.apiUrl) as Observable<OrderMasterData>;
  }
}