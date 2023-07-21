import { Component } from '@angular/core';
import { OfferService } from '../core/services/offer.service';
import { Offer, OfferMasterData } from '../core/model/offer.model';
import { IMAGEAPI } from '../core/constants/api';
import { LoginService } from '../core/services/login.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  // readonly OFFERS_CONSTANTS = ;
  offerImageUrl = IMAGEAPI;
  offers: Offer[] = [];
  constructor(private offerService: OfferService,private loginService:LoginService) {}

  ngOnInit(): void {
    this.getOffers();
    // console.log(this.offers);
  }
  getOffers(): void {
    this.offerService
      .getOffers()
      .subscribe(
        (response: OfferMasterData) => (this.offers = response.result)
      );
  }
  onAddCart():void{
    this.loginService.addOrder();
    
  }
}
