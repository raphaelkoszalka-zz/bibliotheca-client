import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TypingService } from '../../services/typing.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Observable<Array<object>>;
  // @todo: maybe this could be an BehaviorSubject to use it's debounceTime operator;
  public searchParameter: string;

  constructor(private route: ActivatedRoute, private typing: TypingService) {
    route.data.pluck('books').subscribe( (books: Observable<Array<object>>) => this.books = books );
    this.searchParameter = route['params']['_value']['category'] || '';
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    this.searchParameter = this.typing.keyPressed(event, this.searchParameter);
  }

  ngOnInit() {
    // this.searchParameter.debounceTime(500).subscribe(text => {
    //   this.searchParameter = this.typing.keyPressed(event, text);
    // });
  }

}
