import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

export class DevChallengeConstants {

  // OAuth 2.0 social login
  public static GOOGLE_SOCIAL_LOGIN: string = '766932537135-2duu077ih5vfvgun6svi7tm7r2mtge0n.apps.googleusercontent.com';
  public static FACEBOOK_ID: string = '1251822611628570';

  // DevChallenge API
  public static API_BASE: string = '/api';
  public static MY_CHART: string = DevChallengeConstants.API_BASE + '/chart';
  public static AUTH_TOKEN: string = DevChallengeConstants.API_BASE + '/auth/';

  // google books
  public static GOOGLE_BOOKS_KEY: string = 'AIzaSyCOp3DWsbb7LPG4XOUbhn9zfbGNcPuTtUE';
  public static GOOGLE_BOOKS_HOME: string = 'https://www.googleapis.com/books/v1/volumes';

}

// avoid statically resolve symbols compilation error
export function provideConfig() {
  return new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(DevChallengeConstants.GOOGLE_SOCIAL_LOGIN)
  },{
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(DevChallengeConstants.FACEBOOK_ID)
  }
  ]);
}
