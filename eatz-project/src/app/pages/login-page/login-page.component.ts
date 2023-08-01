import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { NgForm } from '@angular/forms';
import { LOGIN_IMAGE } from 'src/app/core/constants/constants';
import { LOGIN_MESSAGES } from 'src/app/core/constants/messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  // user credentials
  username: string = '';
  password: string = '';
  // path url
  LOGIN_IMAGE = LOGIN_IMAGE;
  // Messages
  LOGIN_MESSAGES = LOGIN_MESSAGES;
  constructor(private router: Router, private loginService: LoginService) {}

  /**
   * The function checks if the username and password entered are 'admin' and logs the user in if they
   * are, otherwise it sets an error on the username control.
   * @param {NgForm} ngForm -
   */
  onSubmit(ngForm: NgForm): void {
    if (this.username.trim() === 'admin' && this.password.trim() === 'admin') {
      this.loginService.loginUser();
      localStorage.setItem('user', this.username);
      this.router.navigate(['/home']);
    } else {
      ngForm.controls['username'].setErrors({ inValidCredentials: true });
    }
  }

  /**
   * The function logs in a guest user and navigates to the home page.
   */
  onGuestLogin(): void {
    this.loginService.loginGuest();
    this.router.navigate(['/home']);
  }
}
