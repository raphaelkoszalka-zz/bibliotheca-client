import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Basket } from './basket';
import { BasketService } from './basket.service';
import { AuthenticatedUser } from '../user-authenticated/user-authenticated';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent implements OnInit {

  @Input()
  public book:  Observable<object>;
  private authUser: AuthenticatedUser;


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
    this.http.postUserBasket(basket).subscribe( res => console.log(res));
  }

}
