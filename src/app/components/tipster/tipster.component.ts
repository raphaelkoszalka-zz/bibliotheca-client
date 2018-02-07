import { Component, Input, OnInit } from '@angular/core';
import { FadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-tipster',
  templateUrl: './tipster.component.html',
  styleUrls: ['./tipster.component.css'],
  animations: [FadeAnimation]
})
export class TipsterComponent implements OnInit {

  @Input()
  public config: object;
  public showTip: boolean = false;

  constructor() {}

  ngOnInit() {
    if (this.config) {
      this.showTip = true;
    }
  }

}
