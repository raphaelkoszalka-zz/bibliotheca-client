import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public backgroundStyles: object;
  public loadingImage: boolean = true;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    const coverMap: object = {
      0: './assets/cover/alex-block-340243-min.jpg',
      1: './assets/cover/chuttersnap-344467-min.jpg',
      2: './assets/cover/giammarco-boscaro-378319-min.jpg',
      3: './assets/cover/susan-yin-324587-min.jpg',
      4: './assets/cover/tobias-fischer-185903-min.jpg',
      5: './assets/cover/tu-tram-pham-147910-min.jpg',
      6: './assets/cover/will-van-wingerden-102454-min.jpg'
    };
    this.backgroundStyles = {
      'background-image': 'url(' + coverMap[HomeComponent.getRandomInt(0,6)] + ')',
      'background-size': 'cover',
      '-webkit-background-size': 'cover',
      'background-position': 'center center',
      ' background': 'lightblue'
    };
    setTimeout( () => this.loadingImage = false, 300);
  }

  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
