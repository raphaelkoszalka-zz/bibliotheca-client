import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BroadcasterService} from './services/broadcaster.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})

export class AppComponent implements OnInit {

  constructor(private translate: TranslateService, private broadcaster: BroadcasterService) {
    // fallback for default lang
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    let lang = 'en';
    if (localStorage.getItem('LANGUAGE')) {
      lang = localStorage.getItem('LANGUAGE');
    }
    this.setLanguage(lang);
    this.broadcaster.on<string>('LANGUAGE_CHANGED').subscribe(language => this.setLanguage(language));
  }

  private setLanguage(lang): void {
    this.translate.use(lang);
  }


}
