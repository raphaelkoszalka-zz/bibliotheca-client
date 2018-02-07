import { Component, HostListener, Input } from '@angular/core';
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

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { this.detail = false; }
  }

  public viewBookDetail(): void {
    this.detail = true;
  }

}
