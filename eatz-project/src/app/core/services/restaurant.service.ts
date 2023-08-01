/* The RestaurantService class is an Angular service that handles retrieving restaurant data from a
server and provides methods for updating and retrieving search text. */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RestaurantMasterData } from '../model/restaurant.model';
import { RESTAURANTAPI } from '../../../Environments/api/api';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  //subject
  private searchText = new Subject<string>();
  constructor(private http: HttpClient) {}

  /**
   * This method is used to retrieve restaurant data from the server
   * @returns api data
   */
  getRestaurants(): Observable<RestaurantMasterData> {
    return this.http.get(RESTAURANTAPI) as Observable<RestaurantMasterData>;
  }

  /**
   * The function updates the search text by emitting a new value through a BehaviorSubject.
   * @param {string} searchText - A string text to be searched.
   */
  updateSearchText(searchText: string) {
    this.searchText.next(searchText);
  }
  /**
   * The function returns an observable of the searchText variable.
   * @returns The method is returning an Observable.
   */
  getSearchText() {
    return this.searchText.asObservable();
  }
  /**
   * The function sets the value of the searchText variable.
   * @param {string} searchText - A string text that the user wants to search for.
   */
  setSearchText(searchText: string) {
    this.searchText.next(searchText);
  }
}
