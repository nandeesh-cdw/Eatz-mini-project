import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  //Inputs 
  @Input() isRestaurant: boolean = false;
  @Input() buttonLabel: string='';
  @Input() size: number = 0;
  @Input() isDisabled: boolean | null = false;
  @Input() inputString: string = ''; // change variable
  @Input() showResults: boolean = true;
  @Input() showLabel: boolean = false;
  @Input() placeHolder: string = 'search restuarants';
  @Input() imageSrc?:string;
  @Output() dataEvent = new EventEmitter<string>();

  restaurantName: string = '';
  _searchText: string = '';
  restaurants: Array<Restaurant> = [];
  hideList: boolean = false;

  @ViewChild('input') inputField!: HTMLInputElement;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRestaurants();
    this.route.queryParams.subscribe((params) => {
      this._searchText = params['restaurantName'] || '';
      this.restaurantService.setSearchText(this._searchText);
    });
    // this.restaurantService.setSearchText(this._searchText);
  }

  get searchText(): string {
    return this._searchText;
  }
  
  set searchText(value: string) {
    this._searchText = value;
    this.restaurantService.updateSearchText(this._searchText);
  }

  onSubmit(): void {
    this.dataEvent.emit(this._searchText);
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
