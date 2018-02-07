import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public book;
  constructor() { }

  ngOnInit() {
  }

  public viewBookDetail(): void {
    console.log(this.book);
  }

}
