/* The LocationService class is an Angular service that retrieves location data from an API. */


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocationMasterData } from "../model/location.model";
import { Observable } from "rxjs";
import { LOCATIONAPI } from "../constants/api"

@Injectable({
    providedIn: 'root'
  })

export class LocationService{
    
    constructor(private http:HttpClient){} 
    

    /**
     * @returns The function `retrieveLocation()` is returning an Observable of type
     * `LocationMasterData`.
     */
    retrieveLocation():Observable<LocationMasterData>{
        return this.http.get(LOCATIONAPI)as Observable<LocationMasterData>;
    }

}