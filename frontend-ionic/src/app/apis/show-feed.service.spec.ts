import { TestBed } from '@angular/core/testing';

import { ShowFeedService } from './show-feed.service';

describe('ShowFeedService', () => {
  let service: ShowFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
