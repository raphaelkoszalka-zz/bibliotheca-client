import { Component, OnInit } from '@angular/core';
import {User} from './my-account';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {MyAccountService} from './my-account.service';
import {BibliothecaConstants} from '../../app.constants';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  public user: Observable<User>;

  constructor(route: ActivatedRoute, private http: MyAccountService) {
    this.user = route['data']['_value']['myAccount'];
  }

  ngOnInit() {
    console.log(this.user);
  }

  public updateUser(user): void {
    this.http.putUser(BibliothecaConstants.MY_ACCOUNT + localStorage.getItem('USER_ID'), user)
      .subscribe(res => console.log(res));
  }

}
