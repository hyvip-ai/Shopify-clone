import { TestBed } from '@angular/core/testing';

import { FeaturedcollectionService } from './featuredcollection.service';

describe('FeaturedcollectionService', () => {
  let service: FeaturedcollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedcollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
