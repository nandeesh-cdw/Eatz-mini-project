import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationService } from '../core/services/location.service';
import { LocationMasterData } from '../core/model/location.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {

  location!: LocationMasterData;

  locationSubscription !: Subscription;

  constructor(private locationService: LocationService,private router: Router) {}

  ngOnInit(): void {
      this.getLocationData();
  }

  /**
   * The function `getLocationData` retrieves location data from a service and assigns it to a
   * variable.
   */
  getLocationData(): void {
    this.locationSubscription = this.locationService.retrieveLocation().subscribe((data:LocationMasterData)=>this.location = data);
  }
  /**
   * The function "onGo" navigates to a specific restaurant page based on the provided restaurant name.
   * @param {string} restaurantName - A string representing the name of the restaurant.
   */
  onGo(restaurantName:string):void{
    this.router.navigate(['restaurants', restaurantName]);
  }

  ngOnDestroy(): void {
      this.locationSubscription.unsubscribe();
  }
}
