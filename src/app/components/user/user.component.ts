import { Component, HostListener, OnInit } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster.service';
import { FadeAnimation } from '../../app.animations';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { UserService } from './user.service';
import { AuthenticatedUser } from '../user-authenticated/user-authenticated';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [FadeAnimation]
})

export class UserComponent implements OnInit {

  public socialUser: SocialUser;
  public authenticatedUser: AuthenticatedUser;
  public modalVisible: boolean = false;

  constructor(
    private broadcaster: BroadcasterService,
    private router: Router,
    private authService: AuthService,
    private http: UserService,
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => { if (user) { this.getAccessToken(user); } });
    this.broadcaster.on<string>('LOGOUT').subscribe(() => this.logout());
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 27) { this.userModalLoginVisibility(false); }
  }

  public googleLogin(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public logout(): void {
    this.socialUser = null;
    this.authenticatedUser = null;
    this.authService.signOut();
    localStorage.clear();
    this.router.navigate(['home']);
  }

  public userModalLoginVisibility(isVisible: boolean): void {
    this.modalVisible = isVisible;
  }

  private userLoggedIn(user): void {
    this.authenticatedUser = user;
    this.userModalLoginVisibility(false);
    localStorage.setItem('TOKEN', user['token']);
    localStorage.setItem('USER_ID', user['user']['id']);
    this.router.navigate(['home']);
  }

  private getAccessToken(user: SocialUser) : void {
    this.socialUser = user;
    this.http.getApiAccessToken(user).subscribe( res => this.userLoggedIn(res) );
  }
}
