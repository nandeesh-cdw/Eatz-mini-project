import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Subject } from 'rxjs';

export const authGuardGuard: CanActivateFn =  (route, state) => {

  let router =  inject(Router);

  let a = true;
  // var userState;
  inject(LoginService).getUser().subscribe(user => {
    a = user;
  });

  if (!a) {
    router.navigate(['/']);
  }
  return a
  // return true;
};
