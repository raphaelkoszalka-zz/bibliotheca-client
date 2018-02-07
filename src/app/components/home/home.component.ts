import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TypingService } from '../../services/typing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public backgroundStyles: object;
  public loadingImage: boolean = true;
  public searchParameter: string = '';

  constructor(private typing: TypingService) {
  }

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    this.searchParameter = this.typing.keyPressed(event, this.searchParameter);
  }

  ngOnInit() {
    // cover images enum
    const coverMap: object = {
      0: './assets/cover/alex-block-340243-min.jpg',
      1: './assets/cover/chuttersnap-344467-min.jpg',
      2: './assets/cover/giammarco-boscaro-378319-min.jpg',
      3: './assets/cover/susan-yin-324587-min.jpg',
      4: './assets/cover/tobias-fischer-185903-min.jpg',
      5: './assets/cover/tu-tram-pham-147910-min.jpg',
      6: './assets/cover/will-van-wingerden-102454-min.jpg'
    };

    // cover background styles object to apply with [ngStyle]
    this.backgroundStyles = {
      'background-image': 'url(' + coverMap[HomeComponent.getRandomInt(0,6)] + ')',
      'background-size': 'cover',
      '-webkit-background-size': 'cover',
      'background-position': 'center center',
      ' background': 'lightblue'
    };

    // better fluid, better loader than image loading in blocks
    // smaller images would be even better :/ haha
    setTimeout( () => this.loadingImage = false, 300);

    // change cover image every minute
    setInterval(() =>
        this.backgroundStyles['background-image'] = 'url(' + coverMap[HomeComponent.getRandomInt(0,6)] + ')'
      , 30000);
  }

  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
