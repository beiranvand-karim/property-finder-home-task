import { TestBed, inject } from '@angular/core/testing';
import { TripService } from './trip.service';
import 'rxjs/add/operator/map';

describe('TripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripService]
    });
  });

  // it('should be created', inject([TripService], (service: TripService) => {
  //   expect(service).toBeTruthy();
  // }));
});
