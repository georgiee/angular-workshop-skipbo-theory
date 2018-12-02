import { TestBed } from '@angular/core/testing';

import { BusinessStuffService } from './business-stuff.service';

describe('BusinessStuffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessStuffService = TestBed.get(BusinessStuffService);
    expect(service).toBeTruthy();
  });
});
