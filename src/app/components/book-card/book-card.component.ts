import { Component, Input } from '@angular/core';
import { DeviceDetectorService } from '../../services/device-detector.service';
import { BroadcasterService } from '../../services/broadcaster.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

export class BookCardComponent {

  @Input()
  public book: object;
  public deviceIsMobile: boolean = false;
  public user: string = localStorage.getItem('TOLKIEN');

  constructor(private deviceDetector: DeviceDetectorService, private broadcaster: BroadcasterService) {
    this.deviceIsMobile = deviceDetector.mobileAndTabletcheck();
  }

}
