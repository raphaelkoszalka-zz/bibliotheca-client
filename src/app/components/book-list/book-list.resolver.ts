import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { DevChallengeConstants } from '../../app.constants';
import { QueryBuilderService } from '../../services/query-builder.service';
import { GenericHttpService } from '../../services/http.service';
import 'rxjs';

@Injectable()
export class BookListResolver implements Resolve<any> {

  constructor(private http: GenericHttpService, private queryBuilder: QueryBuilderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<object>>  {
    console.log(route);
    const HOME_QUERIES: Array<object> = [
      { key: 'q', value: 'programming'},
      { key: 'maxResults', value: 12}
    ];
    return Observable.create((observer: Observer<any>) => {
      this.http.get(DevChallengeConstants.GOOGLE_BOOKS_HOME + this.queryBuilder.builder(HOME_QUERIES))
        .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
        );
    });
  }

}

