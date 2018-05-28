import { TestBed, inject } from '@angular/core/testing';

import { FileLibService } from './file-lib.service';

describe('FileLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileLibService]
    });
  });

  it('should be created', inject([FileLibService], (service: FileLibService) => {
    expect(service).toBeTruthy();
  }));
});
