import { Injectable } from '@angular/core';

@Injectable()
export class CreditCardValidationService {

  constructor() { }

  // LUHN ALGORITHM
  public isValid(value): boolean {

    if (/[^0-9-\s]+/.test(value)) return false;

    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    value = value.replace(/\D/g, "");

    for (let n = value.length - 1; n >= 0; n--) {
      let cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) == 0;
  }

}
