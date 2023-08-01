import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./pages/orders/orders.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { OffersComponent } from "./pages/offers/offers.component";
import { RestaurantsComponent } from "./pages/restaurants/restaurants.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { userGuard } from "./core/guards/user.guard";
import { commonGuard } from "./core/guards/common.guard";
const appRoutes: Routes = [
    {path: '', component: LoginPageComponent},
    {path:'home', component: HomePageComponent,canActivate:[commonGuard]},
    {path: 'orders' , component: OrdersComponent,canActivate:[userGuard]} ,
    {path: 'offers', component: OffersComponent,canActivate:[commonGuard]},
    {path:'restaurants', component:RestaurantsComponent,canActivate:[commonGuard]},
    {path:'restaurants/:name?', component:RestaurantsComponent,canActivate:[commonGuard]}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    })

export class AppRouting{

}