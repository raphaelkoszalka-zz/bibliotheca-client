import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Basket } from './basket';
import { BasketService } from './basket.service';
import { FadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  animations: [FadeAnimation]
})

export class BasketComponent implements OnInit {

  @Input()
  public book:  Observable<object>;
  public showTip: boolean = false;
  public tipsterConfig: object = {
    action : 'post',
    class: 'alert-success',
    title: 'Well Done!',
    message: 'Book added to your cart with success!'
  };


  constructor(private http: BasketService) {
  }

  ngOnInit() {
  }

  public addToBask(book: Observable<object>): void {

    let price: number = 0;
    if (book['saleInfo']['retailPrice']) {
      price = book['saleInfo']['retailPrice']['amount'];
    }

    const basket = new Basket(
      book['volumeInfo']['title'] || null,
      book['volumeInfo']['subtitle'] || null,
      book['selfLink'] || null,
      book['volumeInfo']['imageLinks']['smallThumbnail'] || null,
      price || null
    );

    this.http.postUserBasket(basket).subscribe( (res) => {
      this.showTip = true;
      setTimeout( () => this.showTip = false, 3500);
    });
  }

}
