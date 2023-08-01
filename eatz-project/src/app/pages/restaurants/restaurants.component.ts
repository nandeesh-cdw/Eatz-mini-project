import { Component, OnInit } from '@angular/core';
import {
  Restaurant,
  RestaurantMasterData,
} from '../../core/model/restaurant.model';
import { RestaurantService } from '../../core/services/restaurant.service';
import { Observable, map } from 'rxjs';
import { IMAGEAPI } from '../../../Environments/api/api';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {
  seeMoreLabel = 'See More';
  offerImageUrl = IMAGEAPI;
  restaurants: Restaurant[] = [];
  searchText: string = '';
  restaurantName: string = '';
  showResults = false;
  searchObs!: Observable<string>;
  constructor(private restaurantService: RestaurantService) {
    this.searchObs = this.restaurantService.getSearchText();
  }

  ngOnInit(): void {
    this.getRestaurants();
    this.searchFilter();
  }

  /**
   * The function "getRestaurants" retrieves a list of restaurants using a service, sets a random
   * number for each restaurant, and assigns the result to the "restaurants" variable.
   */
  getRestaurants(): void {
    this.restaurantService
      .getRestaurants()
      .pipe(map((x) => this.setRandomNumber(x)))
      .subscribe(
        (restaurants: RestaurantMasterData) =>
          (this.restaurants = restaurants.result)
      );
  }

  /**
   * The getRandomRating function generates a random rating between 1 and 5 with two decimal places.
   * @returns The function getRandomRating() returns a random number between 1 and 5, with two decimal
   * places.
   */
  getRandomRating(): number {
    const randomRating = (Math.random() * 4 + 1).toFixed(2);
    return +randomRating;
  }

  /**
   * The function sets a random rating for each element in the "result" array of a given
   * RestaurantMasterData object.
   * @param {RestaurantMasterData} value - 
   */
  setRandomNumber(value: RestaurantMasterData): RestaurantMasterData {
    value.result.forEach((e: any) => {
      e['rating'] = this.getRandomRating();
    });
    return value;
  }

  /**
   * The searchFilter function subscribes to a  observable and assigns its emitted values to the
   * searchText variable.
   */
  searchFilter() {
    this.searchObs.subscribe((newValue: string) => (this.searchText = newValue));
  }
}
