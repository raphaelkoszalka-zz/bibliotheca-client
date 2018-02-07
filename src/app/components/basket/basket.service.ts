import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BibliothecaConstants } from '../../app.constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import { Basket } from './basket';

@Injectable()
export class BasketService {

  private httpOptions: object;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('TOKEN')
      })
    };
  }

  public getUserBasket(basketUrl: string): Observable<Array<Basket>> {
    return this.http.get(basketUrl, this.httpOptions)
      .catch(e => Observable.throw('Error: ' + e));
  }

  public postUserBasket(item: Basket): Observable<Response> {
    return this.http.post(BibliothecaConstants.BASKET, item, this.httpOptions)
      .catch(e => Observable.throw('Error: ' + e));
  }

  public deleteBookFromBasket(id: string): Observable<Response> {
    return this.http.delete(BibliothecaConstants.BASKET + '/' + id, this.httpOptions)
      .catch(e => Observable.throw('Error: ' + e));
  }

}
