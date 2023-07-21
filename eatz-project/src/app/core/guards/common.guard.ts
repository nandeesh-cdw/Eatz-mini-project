/**
 * This guard is a common guard which is used to give access to routes when either guest or user is logged in.
 */

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const commonGuard: CanActivateFn = (route, state) => {
  let guestState = false;
  let userState = false;

  let loginService = inject(LoginService);

  // checking the status of guest user
  loginService.getGuest().subscribe((guest) => {
    guestState = guest;
  });

  //checking the status of valid user
  loginService.getUser().subscribe((user) => {
    userState = user;
  });

  //checks if states of both guest and user are false
  
  if (!guestState && !userState) {
    return false;
  }
  return true;
};
