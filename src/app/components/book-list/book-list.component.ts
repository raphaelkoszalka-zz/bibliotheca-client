import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: Observable<Array<object>>;

  constructor(private router: ActivatedRoute) {
    router.data.pluck('books')
      .subscribe( (books: Observable<Array<object>>) => this.books = books );
  }

  ngOnInit() {
  }

}
