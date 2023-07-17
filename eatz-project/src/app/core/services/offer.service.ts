import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OfferMasterData } from "../model/offer.model";



@Injectable({
    providedIn: 'root'
  })

  
export class OfferService{
    constructor(private http: HttpClient) {}
    private apiUrl='https://run.mocky.io/v3/a64aee04-fa14-4552-9c47-a789f1364366';

    getOffers():Observable<OfferMasterData>{
    return this.http.get(this.apiUrl) as Observable<OfferMasterData>;
  }
}