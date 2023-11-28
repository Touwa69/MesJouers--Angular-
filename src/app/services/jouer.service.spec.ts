import { TestBed } from '@angular/core/testing';

import { JouerService } from './jouer.service';

describe('JouerService', () => {
  let service: JouerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JouerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
