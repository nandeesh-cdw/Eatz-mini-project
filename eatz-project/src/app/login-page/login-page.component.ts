import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string ='';

  constructor(private router: Router, private loginService:LoginService){}

  onSubmit(ngForm:NgForm):void{
    if(this.username.trim()==='admin' && this.password.trim()==='admin'){
      this.loginService.loginUser();
      localStorage.setItem('user', this.username);
      this.router.navigate(['/home']);
    }
    else{
      ngForm.controls['username'].setErrors({ inValidCredentials: true });

    }
  }
  onGuestLogin():void{
      this.loginService.loginGuest();
      this.router.navigate(['/home']);
  }
}
