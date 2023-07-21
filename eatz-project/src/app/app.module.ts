import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrdersComponent } from './orders/orders.component';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { DateCustomPipe } from './shared/pipes/date-custom.pipe';
import { OffersComponent } from './offers/offers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SearchFilterComponent } from './shared/components/search-filter/search-filter.component';
import { HomePageComponent } from './home-page/home-page.component';

import { FilterPipe } from './shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './home-page/form/form.component';
import { FooterComponent } from './home-page/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    OrdersComponent,
    DateCustomPipe,
    OffersComponent,
    RestaurantsComponent,
    SearchFilterComponent,
    HomePageComponent,
    FilterPipe,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
