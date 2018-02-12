import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Basket } from '../basket/basket';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BibliothecaConstants } from '../../app.constants';
import {QueryBuilderService} from '../../services/query-builder.service';
import { pluck } from 'rxjs/operator/pluck';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  public myBasket: Observable<Basket[]>;
  public total: string;
  public showTip: boolean = false;
  public tipsterConfig: object = {
    action : 'delete',
    class: 'alert-danger'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: BasketService,
    private queryBuilder: QueryBuilderService,
    private translate: TranslateService
  ) {
    this.myBasket = route['data']['_value']['basket'];
    router.routeReuseStrategy.shouldReuseRoute = function(){ return false; };
    let lang = 'en';
    if (localStorage.getItem('LANGUAGE')) {
      lang = localStorage.getItem('LANGUAGE');
    }
    this.setLanguage(lang);
  }

  ngOnInit() {
    this.total = this.totalAmount(this.myBasket['rows']);
  }

  public totalAmount(basket: Observable<Basket>): string {
    let totalAmount = 0;
    basket.map(book => {
      if (book['price']) { totalAmount = totalAmount +  parseFloat(book['price']); }
    });
    return totalAmount.toFixed(2);
  }

  public deleteFromBasket(bookId: string): void {
    this.http.deleteBookFromBasket(bookId).subscribe(
      () => {
        this.showTip = true;
        setTimeout( () => this.showTip = false, 3500 );
        const USER_ID: Array<object> = [{ key: 'q', value: localStorage.getItem('USER_ID')}];
        this.http.getUserBasket(BibliothecaConstants.BASKET + this.queryBuilder.builder(USER_ID, false)).subscribe( (res: any) => {
          this.myBasket = res;
          this.total = this.totalAmount(this.myBasket['rows']);
        });
      },
      (err) => { throw new Error(err); });
  }

  private setLanguage(lang): void {
    this.translate.get('SHOPPING_CART.TIPSTER_TITLE').subscribe(res => this.tipsterConfig['title'] = res);
    this.translate.get('SHOPPING_CART.TIPSTER_MESSAGE').subscribe(res => this.tipsterConfig['message'] = res);
  }

}
