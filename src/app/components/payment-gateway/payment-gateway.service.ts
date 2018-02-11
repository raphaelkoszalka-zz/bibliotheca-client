import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BibliothecaConstants } from '../../app.constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class PaymentGatewayService {

  private httpOptions: object;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('TOLKIEN')
      })
    };
  }

  public postPDF(item: any): Observable<object> {
    return this.http.post(BibliothecaConstants.INVOICE, item, this.httpOptions)
      .catch(e => Observable.throw('Error: ' + e));
  }

}
