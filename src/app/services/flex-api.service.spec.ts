import { TestBed } from '@angular/core/testing';

import { FlexApiService } from './flex-api.service';

describe('FlexApiService', () => {
  let service: FlexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
