import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public books: Observable<Array<object>>;

  constructor(private router: ActivatedRoute) {
    console.log('constructing');
    router.data.pluck('books')
      .subscribe( (books: Observable<Array<object>>) => this.books = books );
  }

  ngOnInit() {
    console.log('teste');
    console.log(this.books);
  }

}
