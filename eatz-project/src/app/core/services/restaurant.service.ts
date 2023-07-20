import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Restaurant, RestaurantMasterData } from "../model/restaurant.model";
import { RESTAURANTAPI } from "../constants/api";

@Injectable({
    providedIn: 'root'
})

export class RestaurantService {
   
    private searchText = new Subject<string>();
    constructor(private http: HttpClient) {}
   
   

    /**
     * This method is used to retrieve data from the server 
     * @returns api data
     */
    getRestaurants():Observable<RestaurantMasterData>{
    return this.http.get(RESTAURANTAPI) as Observable<RestaurantMasterData>;
    }
    updateSearchText(searchText:string){
        this.searchText.next(searchText);
    }
    getObservable(){
       return this.searchText.asObservable();
    }
  }
