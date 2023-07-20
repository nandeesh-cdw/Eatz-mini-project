import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class LoginService{
    
    userLoggedIn: boolean = false;
    guestLoggedIn: boolean = false;
    loggedIn: boolean = false;
    isLoggedIn=new BehaviorSubject<boolean>(false);
    isGuest=new BehaviorSubject<boolean>(false);

    loginUser():void{
        this.userLoggedIn=true;
        this.isLoggedIn.next(true);
    }

    loginGuest():void{
        this.guestLoggedIn=true; 
        this.isGuest.next(true);
    }

    logout():void{
        this.userLoggedIn = false;
        this.guestLoggedIn= false;
        this.isLoggedIn.next(false);
        this.isGuest.next(false);
    }

    getUser():Observable<boolean>{
        return this.isLoggedIn as Observable<boolean>;
    }
    getGuest():Observable<boolean>{
        return this.isGuest as Observable<boolean>;
    }
    
    
}