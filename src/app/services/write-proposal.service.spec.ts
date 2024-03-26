import { TestBed } from '@angular/core/testing';

import { WriteProposalService } from './write-proposal.service';

describe('WriteProposalService', () => {
  let service: WriteProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriteProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
