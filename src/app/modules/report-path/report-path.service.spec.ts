import { TestBed } from '@angular/core/testing';

import { ReportPathService } from './report-path.service';

describe('ReportPathService', () => {
  let service: ReportPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
