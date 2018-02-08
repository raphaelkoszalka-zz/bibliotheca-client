import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BibliothecaConstants } from '../../app.constants';
import { QueryBuilderService } from '../../services/query-builder.service';
import { GenericHttpService } from '../../services/http.service';
import 'rxjs';

@Injectable()
export class BookResolver implements Resolve<any> {

  constructor(private http: GenericHttpService, private queryBuilder: QueryBuilderService) {}



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<object>>  {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(BibliothecaConstants.GOOGLE_SINGLE_VOLUME + route['params']['bookId'])
        .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
        );
    });
  }

}

