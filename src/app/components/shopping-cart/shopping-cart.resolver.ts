import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BibliothecaConstants } from '../../app.constants';
import { QueryBuilderService } from '../../services/query-builder.service';
import 'rxjs';
import { BasketService } from '../basket/basket.service';

@Injectable()
export class ShoppingCartResolver implements Resolve<any> {

  constructor(private http: BasketService, private queryBuilder: QueryBuilderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<object>>  {
    return Observable.create((observer: Observer<any>) => {
      const USER_ID: Array<object> = [{ key: 'q', value: localStorage.getItem('USER_ID')}];
      this.http.getUserBasket(BibliothecaConstants.BASKET + this.queryBuilder.builder(USER_ID, false))
        .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
        );
    });
  }

}

