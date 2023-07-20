import { Component, OnInit } from '@angular/core';
import { Restaurant, RestaurantMasterData } from '../core/model/restaurant.model';
import { RestaurantService } from '../core/services/restaurant.service';
import { Observable, map } from 'rxjs';
import { IMAGEAPI } from '../core/constants/api';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  offerImageUrl= IMAGEAPI;
  restaurants:Restaurant[]=[];
  searchText:string='';
  test!:Observable<string>;
  constructor(private restaurantService:RestaurantService ){
    this.test=this.restaurantService.getObservable();
    

  }
  
  ngOnInit():void {
  this.getRestaurants();
  this.searchFilter();
  }
  
  getRestaurants():void{
    this.restaurantService.getRestaurants().pipe(map(x => this.setRandomNumber(x))).subscribe((restaurants:RestaurantMasterData) => this.restaurants = restaurants.result);
  }

  getRandomRating(): number {
    const randomRating = ((Math.random() * 4) + 1).toFixed(2);
    return +randomRating;
  }

  setRandomNumber(value: RestaurantMasterData): RestaurantMasterData {
    value.result.forEach((e: any) => {
      e['rating'] = this.getRandomRating();
    });
    return value;
  }


  searchFilter(){
    this.test.subscribe((newValue:string)=> this.searchText=newValue);
    console.log(this.searchText);
  }
}
