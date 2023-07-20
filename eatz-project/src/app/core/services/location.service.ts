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
    
    retrieveLocation():Observable<LocationMasterData>{
        return this.http.get(LOCATIONAPI)as Observable<LocationMasterData>;
    }

}