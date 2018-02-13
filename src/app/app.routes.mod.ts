import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './guardians/auth.guardian';
import { BookListResolver } from './components/book-list/book-list.resolver';
import { ShoppingCartResolver } from './components/shopping-cart/shopping-cart.resolver';
import { BookResolver } from './components/book/book.resolver';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {MyAccountResolver} from './components/my-account/my-account.resolver';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    canActivate: [AuthGuard],
    resolve: { 'basket': ShoppingCartResolver }
  }, {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [AuthGuard],
    resolve: { 'myAccount': MyAccountResolver }
  }, {
    path: 'books/:category',
    component: BookListComponent,
    resolve: { 'books': BookListResolver }
  }, {
    path: 'book/:bookId',
    component: BookComponent,
    resolve: { 'book': BookResolver }
  }, {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    BookComponent,
    BookListComponent,
    CheckoutComponent,
    ShoppingCartComponent
  ],
})

export class AppRoutingModule { }
