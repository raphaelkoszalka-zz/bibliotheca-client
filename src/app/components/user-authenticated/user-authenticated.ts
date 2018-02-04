interface AuthUserInfo {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  picture: string;
}

export interface AuthenticatedUser {
  token: string;
  user: AuthUserInfo;
}
