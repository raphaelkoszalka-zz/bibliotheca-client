import { Component, OnInit } from '@angular/core';
import {BroadcasterService} from '../../services/broadcaster.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  public languageSelector: string;

  constructor(private broadcaster: BroadcasterService) {
    this.languageSelector = '0';
  }
  public languageSelected(lang): void {
    console.log(this.languageSelector);
    this.broadcaster.broadcast('LANGUAGE_CHANGED', lang);
  }
}
