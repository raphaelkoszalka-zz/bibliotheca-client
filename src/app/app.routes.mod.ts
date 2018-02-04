import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthGuard } from './guardians/auth.guardian';
import { BookListResolver } from './components/book-list/book-list.resolver';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'home/:welcome-back',
    component: HomeComponent
  },{
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    canActivate: [AuthGuard],
  },{
    path: 'books/:category',
    component: BookListComponent,
    resolve: { 'books': BookListResolver }
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
    BookComponent,
    BookListComponent,
    CheckoutComponent,
    ShoppingCartComponent
  ],
})

export class AppRoutingModule { }
