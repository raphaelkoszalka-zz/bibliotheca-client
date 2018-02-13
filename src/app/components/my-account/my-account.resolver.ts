import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BibliothecaConstants } from '../../app.constants';
import { GenericHttpService } from '../../services/http.service';

@Injectable()
export class MyAccountResolver implements Resolve<any> {

  constructor(private http: GenericHttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(BibliothecaConstants.MY_ACCOUNT + localStorage.getItem('USER_ID'))
        .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
        );
    });
  }

}

