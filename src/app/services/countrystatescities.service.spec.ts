import { TestBed } from '@angular/core/testing';

import { CountrystatescitiesService } from './countrystatescities.service';

describe('CountrystatescitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrystatescitiesService = TestBed.get(CountrystatescitiesService);
    expect(service).toBeTruthy();
  });
});
