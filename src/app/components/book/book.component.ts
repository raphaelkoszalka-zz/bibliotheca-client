import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FadeAnimation } from '../../app.animations';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [FadeAnimation]
})
export class BookComponent implements OnInit{

  @Input()
  public book: object;
  public paymentType: string;
  public paymentNotSelected: boolean;

  constructor(private route: ActivatedRoute) {
    route.data.pluck('book').subscribe( (book: object) => this.book = book );
    this.paymentType = '0';
  }

  ngOnInit() {
    console.log('BookComponent instantiated');
  }


  public doCheckout(): void {
  }

}
