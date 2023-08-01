import { Component } from '@angular/core';
import { OfferService } from '../../core/services/offer.service';
import { Offer, OfferMasterData } from '../../core/model/offer.model';
import { IMAGEAPI } from '../../../Environments/api/api';
import { LoginService } from '../../core/services/login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  // readonly OFFERS_CONSTANTS = ;
  offerImageUrl = IMAGEAPI;
  offers: Offer[] = [];
  cartLabel = 'Add to Cart';
  offerSubscription!: Subscription;
  constructor(
    private offerService: OfferService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getOffers();
  }

  /**
   * The function `getOffers()` retrieves offers from the offer service and assigns the response to the
   * `offers` variable.
   */
  getOffers(): void {
    this.offerSubscription = this.offerService
      .getOffers()
      .subscribe(
        (response: OfferMasterData) => (this.offers = response.result)
      );
  }

  /**
   * The function onAddCart adds an offer to the user's cart by calling the addOrder method of the
   * loginService.
   * @param {Offer} offer -
   */
  onAddCart(offer: Offer): void {
    this.loginService.addOrder(offer);
  }
}
