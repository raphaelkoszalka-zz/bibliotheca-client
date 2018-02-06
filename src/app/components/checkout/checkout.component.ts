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

  constructor() { }

  ngOnInit() {
  }

}
