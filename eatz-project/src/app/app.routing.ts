import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { LoginPageComponent } from "./login-page/login-page.component";
const appRoutes: Routes = [
    {path: 'orders' , component: OrdersComponent},
    {path: 'login', component: LoginPageComponent},
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    })

export class AppRouting{

}