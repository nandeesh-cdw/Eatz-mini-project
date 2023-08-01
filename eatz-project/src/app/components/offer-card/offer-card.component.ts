import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMAGEAPI } from '../../../Environments/api/api';
import { OFFER_MESSAGES } from 'src/app/core/constants/messages';
import { Offer } from 'src/app/core/model/offer.model';
import { Restaurant } from 'src/app/core/model/restaurant.model';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  // Inputs
  @Input() offer?: Offer;
  @Input() restaurant?: Restaurant;
  @Input() buttonLabel = '';
  @Input() addPadding: boolean = false;
  @Output() offerAdded: EventEmitter<Offer> = new EventEmitter();
  // Messages
  OFFER_MESSAGES = OFFER_MESSAGES;
  restaurantLocation = 'Mount Road';
  //url paths
  offerImageUrl = IMAGEAPI;

  /**
   * When the user clicks on add to cart button
   */
  onAddCart(): void {
    this.offerAdded.emit(this.offer);
  }
}
