import { TestBed } from '@angular/core/testing';

import { AlertTosterService } from './alert-toster.service';

describe('AlertTosterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertTosterService = TestBed.get(AlertTosterService);
    expect(service).toBeTruthy();
  });
});
