import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { OffersComponent } from "./offers/offers.component";
const appRoutes: Routes = [
    {path: 'orders' , component: OrdersComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'offers', component: OffersComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    })

export class AppRouting{

}