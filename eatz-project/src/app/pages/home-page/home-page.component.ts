import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationService } from '../../core/services/location.service';
import { LocationMasterData } from '../../core/model/location.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AWESOME_ICONS, LOGIN_IMAGE } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  // location data
  location!: LocationMasterData;
  // subscriptions
  locationSubscription!: Subscription;
  // url paths 
  AWESOME_ICONS=AWESOME_ICONS;
  LOGIN_IMAGE=LOGIN_IMAGE;
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLocationData();
  }

  /**
   * The function `getLocationData` retrieves location data from a service and assigns it to a
   * variable.
   */
  getLocationData(): void {
    this.locationSubscription = this.locationService
      .retrieveLocation()
      .subscribe((data: LocationMasterData) => (this.location = data));
    // this.locationSubscription = this.locationService.retrieveLocation().subscribe({next(data:LocationMasterData){this.location = data}, error(messages:any){console.log(messages)}});
  }
  /**
   * The function "onGo" navigates to a specific restaurant page based on the provided restaurant name.
   * @param {string} restaurantName - A string representing the name of the restaurant.
   */
  onGo(restaurantName: string): void {
    this.router.navigate(['restaurants'], { queryParams: { restaurantName } });
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
  }
}
