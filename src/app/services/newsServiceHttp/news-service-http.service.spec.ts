import { TestBed } from '@angular/core/testing';

import { NewsServiceHttpService } from './news-service-http.service';

describe('NewsServiceHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsServiceHttpService = TestBed.get(NewsServiceHttpService);
    expect(service).toBeTruthy();
  });
});
