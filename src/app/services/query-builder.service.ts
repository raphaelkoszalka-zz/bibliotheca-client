import { Injectable } from '@angular/core';
import { BibliothecaConstants } from '../app.constants';

@Injectable()
export class QueryBuilderService {

  constructor() { }

  public builder(queryParameters: Array<object>, isGoogle: boolean): string {
    // initialize queryString
    let queryString: string = '?';
    // parsing parameters array to build the query string
    queryParameters.map( parameter => {
      queryString += parameter['key'] + '=' + parameter['value'] + '&'
    });
    // add Google Books API key to URI
    if(isGoogle) {
      queryString = queryString + 'key=' + BibliothecaConstants.GOOGLE_BOOKS_KEY;
    }
    return queryString;
  }

}
