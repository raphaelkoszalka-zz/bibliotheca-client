import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FadeAnimation } from '../../app.animations';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { BroadcasterService } from '../../services/broadcaster.service';
import { pluck } from 'rxjs/operator/pluck';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [FadeAnimation]
})
export class BookComponent implements OnInit{

  @Input()
  public book: object;
  public paymentType: string;
  public paymentNotSelected: boolean;
  public user: string = localStorage.getItem('USER_ID');

  constructor(private route: ActivatedRoute, private broadcaster: BroadcasterService) {
    this.book = route['data']['_value']['book'];
    this.paymentType = '0';
  }

  ngOnInit() {
    console.log('BookComponent instantiated');
    this.broadcaster.on<string>('USER_LOGGED_IN').subscribe( () =>  {
        this.user = localStorage.getItem('TOLKIEN');
      });
  }

}
