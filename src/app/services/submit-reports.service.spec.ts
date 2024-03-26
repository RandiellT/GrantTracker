import { TestBed } from '@angular/core/testing';

import { SubmitReportsService } from './submit-reports.service';

describe('SubmitReportsService', () => {
  let service: SubmitReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
