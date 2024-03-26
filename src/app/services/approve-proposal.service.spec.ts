import { TestBed } from '@angular/core/testing';

import { ApproveProposalService } from './approve-proposal.service';

describe('ApproveProposalService', () => {
  let service: ApproveProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
