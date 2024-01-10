import { TestBed } from '@angular/core/testing';

import { QuestionsserviceService } from './questionsservice.service';

describe('QuestionsserviceService', () => {
  let service: QuestionsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
