import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Basket } from '../basket/basket';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BroadcasterService } from '../../services/broadcaster.service';
import { BibliothecaConstants } from '../../app.constants';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  public myBasket: Observable<Array<Basket>>;
  public total: string;
  public showTip: boolean = false;
  public tipsterConfig: object = {
    action : 'delete',
    class: 'alert-danger',
    title: 'Removed',
    message: 'Book removed from your cart with success.'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: BasketService
  ) {
    route.data.pluck('basket').subscribe( (basket: Observable<Array<Basket>>) => this.myBasket = basket );
    router.routeReuseStrategy.shouldReuseRoute = function(){ return false; }
  }

  ngOnInit() {
    this.total = this.totalAmount(this.myBasket['rows']);
  }

  public totalAmount(basket: Observable<Basket>): string {
    let totalAmount = 0;
    basket.map(book => {
      if (book['price']) {
        totalAmount = totalAmount +  parseFloat(book['price']);
      }
    });
    return totalAmount.toFixed(2);
  }

  public deleteFromBasket(bookId: string): void {
    this.http.deleteBookFromBasket(bookId).subscribe(
      () => {
        this.showTip = true;
        setTimeout( () => this.showTip = false, 3500 );
        this.http.getUserBasket(BibliothecaConstants.BASKET).subscribe( (res: any) => {
          this.myBasket = res;
          this.total = this.totalAmount(this.myBasket['rows']);
        });
      },
      (err) => { throw new Error(err); });
  }

}
