import { Basket } from '../basket/basket';

export class PaymentGateway {
  price: string;
  items: Array<Basket>;
  userName: string;
  userId: string;

  constructor(price, items, userName, userId) {
    this.price = price;
    this.items = items;
    this.userName = userName;
    this.userId = userId;
  }
}
