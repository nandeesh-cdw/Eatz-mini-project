/* The OfferService class is an Angular service that retrieves offer data from a server using the
HttpClient module. */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OfferMasterData } from "../model/offer.model";
import { OFFERSAPI } from "../constants/api";


@Injectable({
    providedIn: 'root'
  })  
export class OfferService{
    constructor(private http: HttpClient) {}
    readonly OFFERSAPI=OFFERSAPI;

    /**
     * This method is used to retrieve data from the server 
     * @returns api data
     */
    getOffers():Observable<OfferMasterData>{
    return this.http.get(OFFERSAPI) as Observable<OfferMasterData>;
    }
    
}