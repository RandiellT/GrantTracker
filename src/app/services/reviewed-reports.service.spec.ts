import { TestBed } from '@angular/core/testing';

import { ReviewedReportsService } from './reviewed-reports.service';

describe('ReviewedReportsService', () => {
  let service: ReviewedReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewedReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
