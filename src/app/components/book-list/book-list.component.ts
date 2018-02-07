import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TypingService } from '../../services/typing.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { DeviceDetectorService } from '../../services/device-detector.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent  {

  public books: Observable<Array<object>>;
  // @todo: maybe this could be an BehaviorSubject to use it's debounceTime operator;
  public searchParameter: string;
  public deviceIsMobile: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private typing: TypingService,
    private deviceDetector: DeviceDetectorService,) {
    route.data.pluck('books').subscribe( (books: Observable<Array<object>>) => this.books = books );
    this.searchParameter = route['params']['_value']['category'] || '';
    this.deviceIsMobile = deviceDetector.mobileAndTabletcheck();
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    this.searchParameter = this.typing.keyPressed(event, this.searchParameter);
  }

  public navigateToCategory(category): void {
    this.router.navigate(['books', category]);
  }


}
