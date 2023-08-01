/* The LoginService class is an Angular service that manages user login status, guest login status, and
order list count. */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Offer } from '../model/offer.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // subjects
  orderList = new BehaviorSubject<Offer[]>([]);
  orderList$ = this.orderList.asObservable();
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isGuest = new BehaviorSubject<boolean>(false);

  // used to login the user
  loginUser(): void {
    this.isLoggedIn.next(true);
  }
  // used to login the guest user
  loginGuest(): void {
    this.isGuest.next(true);
  }
  // used to logout both user and guest user
  logout(): void {
    this.orderList.next([]);
    this.isLoggedIn.next(false);
    this.isGuest.next(false);
  }

  /**
   * @returns The `getUser()` method returns user `Observable` of type `boolean`.
   */
  getUser(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
  /**
   * @returns The method is returning an guest Observable of type boolean.
   */
  getGuest(): Observable<boolean> {
    return this.isGuest.asObservable();
  }
  /**
   *
   * @returns The getOrderList() function is returning orderlist Observable of type number.
   */
  getOrderList(): Observable<Offer[]> {
    return this.orderList$;
  }
  /**
   * The addOrder function increments the value of the orderList by 1.
   */
  addOrder(offer: any): void {
    const currentData = this.orderList.getValue();
    const existingOffer = currentData.find((o) => o.name === offer.name);

    if (existingOffer) {
      // If the offer already exists, increment the count
      existingOffer.count++;
    } else {
      // If it's a new offer, add it to the array with count set to 1
      currentData.push({ ...offer, count: 1 });
    }

    this.orderList.next(currentData);
  }
}
