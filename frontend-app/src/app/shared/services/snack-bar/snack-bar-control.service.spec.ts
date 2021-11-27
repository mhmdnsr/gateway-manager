import { TestBed } from '@angular/core/testing';

import { SnackBarControlService } from './snack-bar-control.service';

describe('SnackBarControlService', () => {
  let service: SnackBarControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
