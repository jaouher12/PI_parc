import { TestBed } from '@angular/core/testing';

import { AprioriService } from './apriori.service';

describe('AprioriService', () => {
  let service: AprioriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprioriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
