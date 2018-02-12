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
    this.languageSelector = 'en';
    if (localStorage.getItem('LANGUAGE')) {
      this.languageSelector = localStorage.getItem('LANGUAGE');
    }
  }
  public languageSelected(lang): void {
    this.broadcaster.broadcast('LANGUAGE_CHANGED', lang);
    localStorage.setItem('LANGUAGE', lang);
  }
}
