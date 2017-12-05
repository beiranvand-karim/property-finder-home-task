import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Trip} from '../classes/trip';
import {TripService} from '../services/trip.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {




  private _cheapestPath$: Observable<Trip[]>;

  constructor(
    private _tripsService: TripService
  ) { }

  ngOnInit() {

    this.cheapestPath$ = this.tripsService.cheapestPath$;
  }

  reduceTime(trips: Trip[]): string {


    let hours = trips.map(trip => + trip.duration.h).reduce((total, item) => total + item);
    let minutes = trips.map(trip => + trip.duration.m).reduce((total, item) => total + item);

    if (minutes > 60) {
      minutes = minutes - (minutes / 60) * 60;
      hours += minutes / 60;
    }

    return `${hours}h${minutes}`;


  }

  reduceCost(trips: Trip[]) {

    return trips.map(trip => trip.cost - trip.discount / 100 * trip.cost).reduce((total, item) => total + item);
  }

  /**
   * here goes the getters and setters
   */

  get cheapestPath$(): Observable<Trip[]> {
    return this._cheapestPath$;
  }

  set cheapestPath$(value: Observable<Trip[]>) {
    this._cheapestPath$ = value;
  }
  get tripsService(): TripService {
    return this._tripsService;
  }

  set tripsService(value: TripService) {
    this._tripsService = value;
  }

}
