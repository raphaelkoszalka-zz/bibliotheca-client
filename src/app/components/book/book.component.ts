import { Component, Input } from '@angular/core';
import { FadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [FadeAnimation]
})
export class BookComponent  {

  @Input()
  public book;
  public detail: boolean = false;
  constructor() { }


  public viewBookDetail(): void {
    this.detail = true;
  }

}
