import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Restaurant,
  RestaurantMasterData,
} from 'src/app/core/model/restaurant.model';

import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent implements OnInit {
  @Input() size: number = 0;
  @Input() isDisabled: boolean | null = false;
  @Output() dataEvent = new EventEmitter<void>();
  restaurantName: string = '';
  _searchText: string = '';
  restaurants: Array<Restaurant> = [];
  hideList: boolean = false;

  @ViewChild('input') inputField!: HTMLInputElement;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
    this.restaurantService.updateSearchText(this._searchText);
  }

  onSubmit(): void {
    this.dataEvent.emit();
  }
  getRestaurants(): void {
    this.restaurantService
      .getRestaurants()
      .subscribe(
        (restaurants: RestaurantMasterData) =>
          (this.restaurants = restaurants.result)
      );
  }
  onItemClick(name: string): void {
    this._searchText = name;
    this.restaurantService.updateSearchText(this._searchText);
    this.hideList = false;
  }

  onEnterData() {
    this.hideList = true;
  }
}
