import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent  } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './guardians/auth.guardian';
import { HomeResolver } from './components/home/home.resolver';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent,
    resolve: { 'books': HomeResolver }
  },{
    path: 'home/:welcome-back',
    component: HomeComponent
  },{
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    canActivate: [AuthGuard],
  },{
    path: 'books/:category',
    component: BookListComponent
  },{
    path: 'book/:bookId',
    component: BookComponent
  },{
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    HomeComponent,
    BookComponent,
    BookListComponent,
    CheckoutComponent,
    ShoppingCartComponent
  ],
})

export class AppRoutingModule { }
