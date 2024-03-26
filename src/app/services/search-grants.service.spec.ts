import { TestBed } from '@angular/core/testing';

import { SearchGrantsService } from './search-grants.service';

describe('SearchGrantsService', () => {
  let service: SearchGrantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGrantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
