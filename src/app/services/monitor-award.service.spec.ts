import { TestBed } from '@angular/core/testing';

import { MonitorAwardService } from './monitor-award.service';

describe('MonitorAwardService', () => {
  let service: MonitorAwardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitorAwardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
