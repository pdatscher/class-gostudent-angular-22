import { TestBed } from '@angular/core/testing';

import { GoStudentServiceService } from './go-student-service.service';

describe('GoStudentServiceService', () => {
  let service: GoStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
