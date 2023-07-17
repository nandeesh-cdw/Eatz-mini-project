import { Component } from '@angular/core';
import { OfferService } from '../core/services/offer.service';
import { Offer, OfferMasterData } from '../core/model/offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
offerImageUrl='../../assets/images/chicken-breast-pork-chop-with-beef-meat-steak-vegetable.jpg';
offers:any=[];
constructor(private offerService: OfferService){}

ngOnInit():void{
  this.getOffers();
  // console.log(this.offers);
}
getOffers():void {
  console.log("hlleoffers");
  this.offerService.getOffers().subscribe((response:OfferMasterData) => {
    // console.log(response);
    this.offers = response.result;
    console.log(this.offers)
  });
}
}
