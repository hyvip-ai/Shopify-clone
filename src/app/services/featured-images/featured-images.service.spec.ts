import { TestBed } from '@angular/core/testing';

import { FeaturedImagesService } from './featured-images.service';

describe('FeaturedImagesService', () => {
  let service: FeaturedImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
