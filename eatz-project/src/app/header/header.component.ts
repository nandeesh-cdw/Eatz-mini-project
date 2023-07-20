import { Component } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { OfferService } from '../core/services/offer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isUser: boolean = false;
  isGuest: boolean = false;
  orderSize=0;
  constructor(private loginService: LoginService,private offerService:OfferService){}
  
  ngOnInit(){
    this.getGuestStatus();
    this.getUserStatus();
    this.getOrderSize();
  }

  getUserStatus(){
    this.loginService.getUser().subscribe(user => this.isUser=user);
  }
  getGuestStatus(){
    this.loginService.getGuest().subscribe(guestUser => this.isGuest=guestUser);
  }

  onLogout(){
    this.loginService.logout();
  }
  getOrderSize():void{
    this.offerService.getOrderList().subscribe(orderList => { 
      console.log("subscribing data");
      this.orderSize=orderList
    });
    console.log(this.orderSize);
  }

}
