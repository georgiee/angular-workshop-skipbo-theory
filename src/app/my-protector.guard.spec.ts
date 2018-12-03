import { TestBed, async, inject } from '@angular/core/testing';

import { MyProtectorGuard } from './my-protector.guard';

describe('MyProtectorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyProtectorGuard]
    });
  });

  it('should ...', inject([MyProtectorGuard], (guard: MyProtectorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
