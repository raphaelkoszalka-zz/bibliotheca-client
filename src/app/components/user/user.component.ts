import { Component, HostListener, OnInit } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster.service';
import { FadeAnimation, SlideAnimation } from '../../app.animations';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { UserService } from './user.service';
import { AuthenticatedUser } from './user';


@Component({
  selector: 'app-auth',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [FadeAnimation, SlideAnimation]
})

export class UserComponent implements OnInit {

  public socialUser: SocialUser;
  public authenticatedUser: AuthenticatedUser;
  public modalVisible: boolean = false;
  public userMenuVisible: boolean = false;

  constructor(
    private broadcaster: BroadcasterService,
    private authService: AuthService,
    private http: UserService
  ) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => { if (user) { this.getAccessToken(user); } });
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { this.userModalLoginVisibility(true); }
  }

  public facebookLogin(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public googleLogin(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public logout(): void {
    this.socialUser = null;
    this.authenticatedUser = null;
    this.authService.signOut();
    localStorage.clear();
  }

  public userModalLoginVisibility(isVisible: boolean): void {
    this.modalVisible = isVisible;
  }

  public userMenuVisibility(isVisible: boolean): void {
    this.userMenuVisible = isVisible;
  }

  private userLoggedIn(user): void {
    this.authenticatedUser = user;
    this.userModalLoginVisibility(false);
    localStorage.setItem('USER', JSON.stringify(user));
  }

  private getAccessToken(user: SocialUser) : void {
    this.socialUser = user;
    this.http.getApiAccessToken(user).subscribe( res => this.userLoggedIn(res) );
  }
}
