import { TestBed } from '@angular/core/testing';

import { AccessReportsService } from './access-reports.service';

describe('AccessReportsService', () => {
  let service: AccessReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
