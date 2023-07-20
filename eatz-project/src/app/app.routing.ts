import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { OffersComponent } from "./offers/offers.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { authGuardGuard } from "./core/guards/auth-guard.guard";
const appRoutes: Routes = [
    {path: '', component: LoginPageComponent},
    { path:'home', component: HomePageComponent,  },
    {path: 'orders' , component: OrdersComponent,canActivate:[authGuardGuard,]} ,
    {path: 'offers', component: OffersComponent},
    {path:'restaurants', component:RestaurantsComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    })

export class AppRouting{

}