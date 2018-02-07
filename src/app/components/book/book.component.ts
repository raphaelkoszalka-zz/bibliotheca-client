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
  public book;
  public detail: boolean = false;
  constructor(private route: ActivatedRoute) {
    route.data.pluck('book').subscribe( (book: Observable<Array<object>>) => this.book = book );
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { this.detail = false; }
  }

  ngOnInit() {
    console.log(this.book);
  }

  public viewBookDetail(): void {
    this.detail = true;
  }

}
