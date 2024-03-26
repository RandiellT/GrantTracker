import { TestBed } from '@angular/core/testing';

import { OfferGrantsService } from './offer-grants.service';

describe('OfferGrantsService', () => {
  let service: OfferGrantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferGrantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
