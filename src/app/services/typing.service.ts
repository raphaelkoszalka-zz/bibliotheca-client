import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TypingService {

  constructor(private router: Router) { }

  private static alphaOnly(event): boolean {
    const key = event.keyCode;
    return ((key >= 65 && key <= 90));
  };

  // @todo: think of a better way to check the string (remove all those i
  public keyPressed(event, searchParameter): string {

    if ((event.keyCode === 13) && (searchParameter.length > 1)) {
      this.router.navigate(['books', searchParameter]);
    }

    if ((event.keyCode === 8) && (searchParameter.length > 0)) {
      searchParameter = searchParameter.substring(0, searchParameter.length - 1);
      return searchParameter;
    }

    if (TypingService.alphaOnly(event)) {
      searchParameter += event['key'];
    }

    if(!searchParameter) {
      searchParameter = '';
    }

    return searchParameter;
  }
}
