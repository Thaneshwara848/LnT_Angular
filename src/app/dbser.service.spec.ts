import { TestBed } from '@angular/core/testing';

import { DbserService } from './dbser.service';

describe('DbserService', () => {
  let service: DbserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
