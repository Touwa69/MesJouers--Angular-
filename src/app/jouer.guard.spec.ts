import { TestBed } from '@angular/core/testing';

import { JouerGuard } from './jouer.guard';

describe('JouerGuard', () => {
  let guard: JouerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JouerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
