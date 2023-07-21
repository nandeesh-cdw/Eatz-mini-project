/**
 * This  guard  is used to authenticate guest users
 */

import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';

export const guestGuard: CanActivateFn = (route, state) => {
  let guestState = true;

  //checks the state of the guest user
  inject(LoginService).getGuest().subscribe(guest => {
    guestState = guest;
  });

  //checks if the guest user is logged in 
  if (!guestState) {
    return false;
  }
  return true;
};
