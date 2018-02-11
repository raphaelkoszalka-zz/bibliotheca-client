import { Component, HostListener, Input } from '@angular/core';
import { FadeAnimation } from '../../app.animations';
import { PaymentGatewayService } from './payment-gateway.service';
import { Observable } from 'rxjs/Observable';
import { Basket } from '../basket/basket';
import { PaymentGateway } from './payment-gateway';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
  animations: [FadeAnimation]
})
export class PaymentGatewayComponent {

  public paymentType: string;
  // @todo: generic modal component
  public modalVisible: boolean = false;
  public paymentNotSelected: boolean = false;
  @Input()
  public total: string;
  @Input()
  public basket: any;

  constructor(private http: PaymentGatewayService) {
    this.paymentType = '0';
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { this.userModalLoginVisibility(false); }
  }

  private buildPDFPayload(basket): PaymentGateway {
    return new PaymentGateway(
      this.total,
      JSON.stringify(this.basket['rows']),
      localStorage.getItem('USER_NAME'),
      localStorage.getItem('USER_ID')
    );
  }

  public doCheckout(): void {

    // payment type not selected
    if (this.paymentType === '0') {
      this.paymentNotSelected = true;
      return;
    }
    this.paymentNotSelected = false;
    // payment type equal to credit card
    if (this.paymentType === '1') {
      //@ todo: validation on credit card
      this.modalVisible = true;
      return;
    }

    // payment type equal to invoice
    // @todo: node pdf generator @ backend
    alert('Will POST to PDF Invoice generator API endpoint [ >> /api/invoice  << ] \\\n' +
      'Already generating PDF from HTML, but i want to parse POST payload ' +
      'and then generate a proper invoice file with valid items. \\\n ' +
      '[ >> PDF GENERATED: << ] https://bibliotheca.raphael.website/invoices/pdf_from_api.pdf');

    window.open('https://bibliotheca.raphael.website/invoices/pdf_from_api.pdf');

    this.http.postPDF(this.buildPDFPayload(this.basket))
      .subscribe( (res) => { console.log(res) });
  }

  public userModalLoginVisibility(isVisible: boolean): void {
    this.modalVisible = isVisible;
  }

}
