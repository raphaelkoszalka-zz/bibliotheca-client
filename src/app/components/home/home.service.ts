import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) { }

  public get(endpoint: string): Observable<Response> {
    return this.http.get(endpoint)
      .catch(e => Observable.throw('Error: ' + e));
  }
}
