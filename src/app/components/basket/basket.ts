import { AuthenticatedUser } from '../user-authenticated/user-authenticated';

export class Basket {

  title: string|null;
  subtitle: string|null;
  selfLink: string|null;
  thumbnail: string|null;
  price: string|null;
  googleId: string|null;

  constructor(title, subtitle, selfLink, thumbnail, price, googleId) {
    this.title = title;
    this.subtitle = subtitle;
    this.selfLink = selfLink;
    this.thumbnail = thumbnail;
    this.price = price;
    this.googleId = googleId;
  }

}
