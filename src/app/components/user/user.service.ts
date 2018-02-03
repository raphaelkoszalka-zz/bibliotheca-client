import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DevChallengeConstants } from '../../app.constants';
import { Observable } from 'rxjs/Observable';
import { SocialUser } from 'angularx-social-login';
import 'rxjs/add/operator/catch'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  public getApiAccessToken(user: SocialUser): Observable<Response> {
    const auth = DevChallengeConstants.AUTH_TOKEN + user['provider'].toLowerCase() + '?access_token=' + user['authToken'];
    return this.http.post(auth, null)
      .catch(e => Observable.throw('Error: ' + e));
  }

}
