import { Component, Input, OnInit } from '@angular/core';
import { AuthenticatedUser } from './user-authenticated';
import { FadeAnimation, MenuSlideAnimation } from '../../app.animations';

@Component({
  selector: 'app-user-authenticated',
  templateUrl: './user-authenticated.component.html',
  styleUrls: ['./user-authenticated.component.css'],
  animations: [FadeAnimation, MenuSlideAnimation]
})
export class UserAuthenticatedComponent implements OnInit {

  @Input()
  authenticatedUser: AuthenticatedUser;
  public userMenuVisible: boolean = false;

  constructor() { }

  ngOnInit() {}

  public userMenuVisibility(isVisible: boolean): void {
    this.userMenuVisible = isVisible;
  }

}
