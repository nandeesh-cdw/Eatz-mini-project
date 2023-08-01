import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/core/model/offer.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  //order list items
  @Input() cartOrders!: Array<Offer>;
  isCartListOpen: boolean = false;

  /**
   * To toggle the cart list open and close the cart
   */
  onCartClick(): void {
    if (this.cartOrders.length > 0) {
      this.isCartListOpen = !this.isCartListOpen;
    }
  }
  
  /**
   * This method is used to close the cart list
   */
  closeCartList(): void {
    this.isCartListOpen = false;
  }
}
