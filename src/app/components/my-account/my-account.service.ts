import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { User } from './my-account';

@Injectable()
export class MyAccountService {

  private httpOptions: object;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('TOLKIEN')
      })
    };
  }

  public getUser(userUrl: string): Observable<User> {
    return this.http.get(userUrl, this.httpOptions)
      .catch(e => Observable.throw('Error: ' + e));
  }

  public putUser(userUrl: string, user: User): Observable<User> {
    return this.http.put(userUrl, user, this.httpOptions)
      .catch(e => Observable.throw('Error: ' + e));
  }

}
