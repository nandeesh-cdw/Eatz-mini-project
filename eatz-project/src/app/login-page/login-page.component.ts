import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string ='';

  constructor(private router: Router, private loginService:LoginService){}

  onSubmit():void{
    if(this.username.trim()==='admin' && this.password.trim()==='admin'){
      this.loginService.loginUser();
      this.router.navigate(['/home']);
    }
  }
  onGuestLogin():void{
      this.loginService.loginGuest();
      this.router.navigate(['/home']);
  }
}
