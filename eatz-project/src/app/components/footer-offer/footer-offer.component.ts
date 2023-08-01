import { Component } from '@angular/core';
import { IMAGEURL } from 'src/app/core/constants/constants';
import { FOOTER_MESSAGES } from 'src/app/core/constants/messages';

@Component({
  selector: 'app-footer-offer',
  templateUrl: './footer-offer.component.html',
  styleUrls: ['./footer-offer.component.scss']
})
export class FooterOfferComponent {
  FOOTER_MESSAGES = FOOTER_MESSAGES;
  imageUrl = IMAGEURL
}
