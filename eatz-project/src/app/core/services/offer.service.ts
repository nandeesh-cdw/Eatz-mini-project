import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { OfferMasterData } from "../model/offer.model";
import { OFFERSAPI } from "../constants/api";


@Injectable({
    providedIn: 'root'
  })  
export class OfferService{
    constructor(private http: HttpClient) {}
    orderList=new BehaviorSubject<number>(0);
    orderList$ = this.orderList.asObservable();
    readonly OFFERSAPI=OFFERSAPI;

    /**
     * This method is used to retrieve data from the server 
     * @returns api data
     */
    getOffers():Observable<OfferMasterData>{
    return this.http.get(OFFERSAPI) as Observable<OfferMasterData>;
    }
    getOrderList():Observable<number>{
      return this.orderList$;
    }
    addOrder():void{
      this.orderList.next(this.orderList.value + 1);
      console.log("Added order");
    }
}