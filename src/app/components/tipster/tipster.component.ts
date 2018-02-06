import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipster',
  templateUrl: './tipster.component.html',
  styleUrls: ['./tipster.component.css']
})
export class TipsterComponent implements OnInit {

  public homeTipster: boolean = true;

  constructor() { }

  ngOnInit() {}

  public hideTip(): void {
    this.homeTipster = false
  }

}
