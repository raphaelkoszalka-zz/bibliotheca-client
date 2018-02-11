import { TestBed, inject } from '@angular/core/testing';

import { CreditCardValidationService } from './credit-card-validation.service';

describe('CreditCardValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCardValidationService]
    });
  });

  it('should be created', inject([CreditCardValidationService], (service: CreditCardValidationService) => {
    expect(service).toBeTruthy();
  }));
});
