import { Component, Input, OnInit } from '@angular/core';
import { AuthenticatedUser } from './user-authenticated';
import { FadeAnimation, MenuSlideAnimation } from '../../app.animations';
import { BroadcasterService } from '../../services/broadcaster.service';
import { DeviceDetectorService } from '../../services/device-detector.service';

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
  public deviceIsMobile: boolean = false;

  constructor(
    private deviceDetector: DeviceDetectorService,
    private broadcaster: BroadcasterService) {
    this.deviceIsMobile = deviceDetector.mobileAndTabletcheck();
  }

  ngOnInit() {}

  public userMenuVisibility(isVisible: boolean): void {
    this.userMenuVisible = isVisible;
  }

  public logout(): void {
    this.broadcaster.broadcast('LOGOUT');
  }

}
