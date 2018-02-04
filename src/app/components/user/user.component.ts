import { Component, HostListener, OnInit } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster.service';
import { FadeAnimation } from '../../app.animations';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { UserService } from './user.service';


@Component({
  selector: 'app-auth',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [FadeAnimation]
})

export class UserComponent implements OnInit {

  public user: SocialUser;
  public modalVisible: boolean = false;

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
    this.authService.signOut();
    this.user = null;
    localStorage.clear();
  }

  public userModalLoginVisibility(isVisible: boolean): void {
    this.modalVisible = isVisible;
  }

  private userLoggedIn(user): void {
    localStorage.setItem('USER', JSON.stringify(user));
    this.userModalLoginVisibility(false);
  }

  private getAccessToken(user: SocialUser) : void {
    this.user = user;
    this.http.getApiAccessToken(user).subscribe( res => this.userLoggedIn(res) );
  }
}
