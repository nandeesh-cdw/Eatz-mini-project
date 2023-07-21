/* The LoginService class is an Angular service that manages user login status, guest login status, and
order list count. */
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class LoginService{
    orderList=new BehaviorSubject<number>(0);
    orderList$ = this.orderList.asObservable();
    isLoggedIn=new BehaviorSubject<boolean>(false);
    isGuest=new BehaviorSubject<boolean>(false);

    // used to login the user 
    loginUser():void{
        this.isLoggedIn.next(true);
    }
    // used to login the guest user 
    loginGuest():void{
        this.isGuest.next(true);
    }
    // used to logout both user and guest user 
    logout():void{
        this.orderList.next(0);
        this.isLoggedIn.next(false);
        this.isGuest.next(false);
    }
    
    /**
    * @returns The `getUser()` method returns user `Observable` of type `boolean`.
    */
    getUser():Observable<boolean>{
        return this.isLoggedIn.asObservable();
   
    }
    /**
     * @returns The method is returning an guest Observable of type boolean.
     */
    getGuest():Observable<boolean>{
        return this.isGuest.asObservable()
    }
    /**
     * 
     * @returns The getOrderList() function is returning orderlist Observable of type number.
     */
    getOrderList():Observable<number>{
        return this.orderList$;
    }
    /**
     * The addOrder function increments the value of the orderList by 1.
     */
    addOrder():void{
        this.orderList.next(this.orderList.value + 1);
    }
}