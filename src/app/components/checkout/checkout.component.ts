import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Basket } from '../basket/basket';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent  {

  @Input()
  public totalAmount: number;
  @Input()
  public basket: Observable<Basket[]>;

  constructor() {}

}
