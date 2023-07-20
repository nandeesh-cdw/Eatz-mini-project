import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from 'src/app/core/model/restaurant.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(restaurants:Array<Restaurant>,searchText:string,searchType?:boolean): Array<Restaurant> {
    if(restaurants.length === 0 ) return new Array<Restaurant>();
    if(searchText === ''&& searchType === false) return restaurants;
    if(searchText === ''&& searchType === true) return new Array<Restaurant>();
    searchText=searchText.toLowerCase();
    return restaurants.filter((restaurant:Restaurant)=>{
      return JSON.stringify(restaurant).toLowerCase().includes(searchText);
    })
  }

}
