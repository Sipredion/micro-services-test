import { TestBed } from '@angular/core/testing';

import { MicroServicesService } from './micro-services.service';

describe('MicroServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicroServicesService = TestBed.get(MicroServicesService);
    expect(service).toBeTruthy();
  });
});
