import { TestBed } from '@angular/core/testing';

import { TrackProposalService } from './track-proposal.service';

describe('TrackProposalService', () => {
  let service: TrackProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
