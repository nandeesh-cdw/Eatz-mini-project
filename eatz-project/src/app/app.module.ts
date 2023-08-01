import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { DateCustomPipe } from './shared/pipes/date-custom.pipe';
import { OffersComponent } from './pages/offers/offers.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { SearchFilterComponent } from './shared/components/search-filter/search-filter.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { LinkComponent } from './components/link/link.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderModalComponent } from './components/order-modal/order-modal.component';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { FooterOfferComponent } from './components/footer-offer/footer-offer.component';
import { CartComponent } from './components/cart/cart.component';
import { MediaLinksComponent } from './components/media-links/media-links.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
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
    FooterComponent,
    OfferCardComponent,
    LinkComponent,
    OrderCardComponent,
    OrderModalComponent,
    ClickOutsideDirective,
    FooterOfferComponent,
    CartComponent,
    MediaLinksComponent,
    CopyrightComponent,
    PageTitleComponent,

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
