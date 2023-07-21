import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { HEADER_CONSTANTS } from '../core/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnDestroy{
  isUser: boolean = false;
  isGuest: boolean = false;
  home:string=HEADER_CONSTANTS.home;
  title:string=HEADER_CONSTANTS.title;
  orders:string=HEADER_CONSTANTS.orders;
  restaurants:string=HEADER_CONSTANTS.restaurants;
  offers:string=HEADER_CONSTANTS.offers;
  logout:string=HEADER_CONSTANTS.logout;
  orderSize:number=0;
  constructor(private loginService: LoginService,private router:Router){}
  
  
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
    this.router.navigate(['/']);
  }

  getOrderSize():void{
    this.loginService.getOrderList().subscribe(orderList => { 
      console.log("subscribing data");
      this.orderSize=orderList
    });
    console.log(this.orderSize);
  }

  ngOnDestroy(): void {
      
  }

}
