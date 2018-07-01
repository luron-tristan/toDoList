import { TestBed, inject } from '@angular/core/testing';

import { TasksStorageService } from './tasks-storage.service';

describe('TasksStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksStorageService]
    });
  });

  it('should be created', inject([TasksStorageService], (service: TasksStorageService) => {
    expect(service).toBeTruthy();
  }));
});
