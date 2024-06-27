import { TestBed } from '@angular/core/testing';

import { VisibilityOnScrollService } from './visibility-on-scroll.service';

describe('VisibilityOnScrollService', () => {
  let service: VisibilityOnScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityOnScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
