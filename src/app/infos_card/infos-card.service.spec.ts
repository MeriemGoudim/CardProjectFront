import { TestBed } from '@angular/core/testing';

import { InfosCardService } from './infos-card.service';

describe('InfosCardService', () => {
  let service: InfosCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
