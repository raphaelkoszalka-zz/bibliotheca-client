import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

export class BibliothecaConstants {

  // OAuth 2.0 social login
  public static GOOGLE_SOCIAL_LOGIN: string = '766932537135-2duu077ih5vfvgun6svi7tm7r2mtge0n.apps.googleusercontent.com';

  // DevChallenge API
  public static API_BASE: string = '/api';
  public static BASKET: string = BibliothecaConstants.API_BASE + '/basket';
  public static INVOICE: string = BibliothecaConstants.API_BASE + '/invoice';
  public static AUTH_TOKEN: string = BibliothecaConstants.API_BASE + '/auth/';
  public static MY_ACCOUNT: string = BibliothecaConstants.API_BASE + '/user/';

  // google books
  public static GOOGLE_BOOKS_KEY: string = 'AIzaSyCOp3DWsbb7LPG4XOUbhn9zfbGNcPuTtUE';
  public static GOOGLE_BOOKS_HOME: string = 'https://www.googleapis.com/books/v1/volumes';
}

// avoid statically resolve symbols compilation error
export function provideConfig() {
  return new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(BibliothecaConstants.GOOGLE_SOCIAL_LOGIN)
  }
  ]);
}
