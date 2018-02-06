import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Basket } from '../basket/basket';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  public myBasket: Observable<Array<Basket>>;
  public total: number;

  constructor(private router: ActivatedRoute) {
    router.data.pluck('basket')
      .subscribe( (basket: Observable<Array<Basket>>) => this.myBasket = basket );
  }

  ngOnInit() {
    this.total = this.totalAmount(this.myBasket['rows']);
  }

  public totalAmount(basket: Observable<Basket>): number {
    let totalAmount: number = 0;
    basket.map(book => {
      if (book['price']) {
        totalAmount = totalAmount +  parseFloat(book['price'].toString());
        console.log(totalAmount);
      }
    });
    return totalAmount;
  }

}
