import { TestBed } from '@angular/core/testing';

import { JspfdServiceService } from './jspfd-service.service';

describe('JspfdServiceService', () => {
  let service: JspfdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JspfdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
