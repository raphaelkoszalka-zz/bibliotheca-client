import { Injectable } from '@angular/core';
import { DevChallengeConstants } from '../app.constants';

@Injectable()
export class QueryBuilderService {

  constructor() { }

  public builder(queryParameters: Array<object>): string {
    // initialize queryString
    let queryString: string = '?';
    // parsing parameters array to build the query string
    queryParameters.map( parameter => {
      queryString += parameter['key'] + '=' + parameter['value'] + '&'
    });
    // add Google Books API key to URI
    queryString = queryString + 'key=' + DevChallengeConstants.GOOGLE_BOOKS_KEY;
    return queryString;
  }

}
