/**
 *  This  guard  is used to authenticate valid users
 */

import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  let userState = true;

  //checks the state of the valid user 
  inject(LoginService).getUser().subscribe(user => {
    userState = user;
  });

  //checks if valid user has logged in 
  if (!userState) {
    return false;
    
  }
  
  return true;
};
