import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input()
  public numberOfBooks: number;
  @Input()
  public totalAmount: number;
  public paymentType: string;
  public paymentNotSelected: boolean = false;

  constructor() {
    this.paymentType = '0';
  }

  ngOnInit() {
  }

  public doCheckout(): void {
    if (this.paymentType === '0') {
      this.paymentNotSelected = true;
    }
    this.paymentNotSelected = false;
  }

}
