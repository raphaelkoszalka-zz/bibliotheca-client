export class Basket {

  title: string|null;
  subtitle: string|null;
  selfLink: string|null;
  thumbnail: string|null;
  price: string|null;
  googleId: string|null;
  queryId: string;

  constructor(title, subtitle, selfLink, thumbnail, price, googleId, queryId) {
    this.title = title;
    this.subtitle = subtitle;
    this.selfLink = selfLink;
    this.thumbnail = thumbnail;
    this.price = price;
    this.googleId = googleId;
    this.queryId = queryId;
  }

}
