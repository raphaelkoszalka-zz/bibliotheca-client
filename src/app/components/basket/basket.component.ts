import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Basket } from './basket';
import { BasketService } from './basket.service';
import { FadeAnimation } from '../../app.animations';
import {TranslateService} from '@ngx-translate/core';
import {BroadcasterService} from '../../services/broadcaster.service';

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
  public user: string = localStorage.getItem('TOLKIEN');
  public tipsterConfig: object;

  constructor(
    private http: BasketService,
    private translate: TranslateService,
    private broadcaster: BroadcasterService
  ) {
    this.tipsterConfig  = {
      action : 'post',
      class: 'alert-success'
    };
    this.setLanguage('en');
  }

  ngOnInit() {
    this.broadcaster.on<string>('LANGUAGE_CHANGED').subscribe(lang => this.setLanguage(lang));
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
      price || null,
      book['id'],
      localStorage.getItem('USER_ID')
    );

    this.http.postUserBasket(basket).subscribe( (res) => {
      this.showTip = true;
      setTimeout( () => this.showTip = false, 3500);
    });
  }

  private setLanguage(lang: string): void {
    this.translate.get('BASKET.TIPSTER_TITLE').subscribe(res => this.tipsterConfig['title'] = res);
    this.translate.get('BASKET.TIPSTER_MESSAGE').subscribe(res => this.tipsterConfig['message'] = res);
  }

}
