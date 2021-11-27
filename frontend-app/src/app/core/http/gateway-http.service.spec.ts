import { TestBed } from '@angular/core/testing';

import { GatewayHttpService } from './gateway-http.service';

describe('GatewayHttpService', () => {
  let service: GatewayHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewayHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
