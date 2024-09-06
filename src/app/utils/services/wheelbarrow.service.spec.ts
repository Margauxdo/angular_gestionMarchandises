import { TestBed } from '@angular/core/testing';

import { WheelbarrowService } from './wheelbarrow.service';

describe('WheelbarrowService', () => {
  let service: WheelbarrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheelbarrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
