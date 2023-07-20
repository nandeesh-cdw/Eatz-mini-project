import { Component } from '@angular/core';
import { LocationService } from '../core/services/location.service';
import { LocationMasterData } from '../core/model/location.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  location!: any;
  constructor(private locationService: LocationService) {
    this.location = locationService.retrieveLocation().subscribe(data=>this.location = data);
    
  }
}
