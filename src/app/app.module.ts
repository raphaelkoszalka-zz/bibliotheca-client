import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { AppRoutingModule } from './app.routes.mod';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

import { provideConfig } from './app.constants';

import { BroadcasterService } from './services/broadcaster.service';
import { UserService } from './components/user/user.service';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { QueryBuilderService } from './services/query-builder.service';
import { BookCardComponent } from './components/book-card/book-card.component';
import { GenericHttpService } from './services/http.service';
import { BookListResolver } from './components/book-list/book-list.resolver';
import { UserAuthenticatedComponent } from './components/user-authenticated/user-authenticated.component';
import { TipsterComponent } from './components/tipster/tipster.component';
import { SubStringPipe } from './pipes/substring.pipe';
import { BasketComponent } from './components/basket/basket.component';
import { ModalComponent } from './components/modal/modal.component';
import { BasketService } from './components/basket/basket.service';
import { ShoppingCartResolver } from './components/shopping-cart/shopping-cart.resolver';
import { PricePipe } from './pipes/price.pipe';
import { TypingService } from './services/typing.service';
import { FormsModule } from '@angular/forms';
import { DeviceDetectorService } from './services/device-detector.service';
import { BookResolver } from './components/book/book.resolver';
import { PaymentGatewayComponent } from './components/payment-gateway/payment-gateway.component';
import { PaymentGatewayService } from './components/payment-gateway/payment-gateway.service';
import { CreditCardValidationService } from './services/credit-card-validation.service';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    HomeComponent,
    BookListComponent,
    BookComponent,
    CheckoutComponent,
    FooterComponent,
    ShoppingCartComponent,
    BookCardComponent,
    UserAuthenticatedComponent,
    TipsterComponent,
    SubStringPipe,
    BasketComponent,
    ModalComponent,
    PricePipe,
    PaymentGatewayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    BroadcasterService,
    { provide: AuthServiceConfig, useFactory: provideConfig },
    UserService,
    QueryBuilderService,
    GenericHttpService,
    BookListResolver,
    ShoppingCartResolver,
    BasketService,
    TypingService,
    DeviceDetectorService,
    BookResolver,
    PaymentGatewayService,
    CreditCardValidationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
