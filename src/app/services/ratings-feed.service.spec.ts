import { TestBed, inject } from '@angular/core/testing';

import { RatingsFeedService } from './ratings-feed.service';

describe('RatingsFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingsFeedService]
    });
  });

  it('should be created', inject([RatingsFeedService], (service: RatingsFeedService) => {
    expect(service).toBeTruthy();
  }));
});
