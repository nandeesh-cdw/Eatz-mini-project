import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { Offer } from '../../core/model/offer.model';
import { Subscription } from 'rxjs';
import { ROUTES_CONSTANTS } from '../../core/constants/constants'
import { HEADER_MESSAGES } from 'src/app/core/constants/messages';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Component constants
  isUser: boolean = false;
  isGuest: boolean = false;
  APP_ROUTES =  ROUTES_CONSTANTS;
  HEADER_MESSAGES = HEADER_MESSAGES;
  activeClass="active-link";
  //Subscriptions
  userSubscription!: Subscription;
  guestSubscription!: Subscription;
  ordersSubscription!: Subscription;
  //Active orders
  cartOrders!: Array<Offer>;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.getGuestStatus();
    this.getUserStatus();
    this.getOrderSize();
  }

  /**
   * This method is used to get the state of the valid user
   */
  getUserStatus(): void {
    this.userSubscription = this.loginService
      .getUser()
      .subscribe((user) => (this.isUser = user)); // New syntax for subscribe
  }

  /**
   * This method is used to get the state of the guest user
   */
  getGuestStatus(): void {
    this.guestSubscription = this.loginService
      .getGuest()
      .subscribe((guestUser) => (this.isGuest = guestUser));
  }

  /**
   * This method is used to log out the user/guest and return to login page
   */
  onLogout(): void {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  /**
   * This method is used to get the order list from the offers page
   */
  getOrderSize(): void {
    this.ordersSubscription = this.loginService
      .getOrderList()
      .subscribe((orderList) => {
        this.cartOrders = orderList;
      });
  }

  /**
   * This method is used to unsubscribe to all of the subscriptions used in this component
   */
  unsubscribe(): void {
    this.ordersSubscription.unsubscribe();
    this.guestSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
