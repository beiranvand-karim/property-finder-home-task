import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TripsResponse} from '../classes/trips-response';
import {tripsResponseInit} from '../initiations/trips-response-init';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Trip} from '../classes/trip';
import * as _ from 'lodash';
import {Dijkstra} from '../classes/dijkstra';
import {environment} from '../../environments/environment';

@Injectable()
export class TripService {


  private _tripsSubject = new BehaviorSubject<TripsResponse>(tripsResponseInit);
  private _trips$ = this.tripsSubject.asObservable();


  private _cheapestPathSubject = new BehaviorSubject<Trip[]>(null);
  private _cheapestPath$ = this.cheapestPathSubject.asObservable();


  graph: Dijkstra = new Dijkstra();


  constructor(
    private _http: Http
  ) { }


  /**
   * fetches data from the mock server
   */
  fetchTrips() {

    this.http.get(environment.server)
      .map((data) => data.json())
      .subscribe((data) => {
          this.tripsSubject.next(data);
      });

  }

  /**
   * main entry point for calculating the optimum path
   * @param departure
   * @param arrival
   * @param type
   */
  calculatePath(departure, arrival, type) {


    const deals = this.tripsSubject.getValue().deals;


    this.addVertexes(deals, type);

    const path = this.graph.shortestPath(departure, arrival);

    this.cheapestPathSubject.next(this.extractFinalPath(path, deals, type));

  }

  /**
   * adds all the edges and vertexes to the the dijkstra algorithm
   * @param deals
   * @param type
   */
  addVertexes(deals, type) {

    const vertexes = _(deals).groupBy('departure')
      .transform((result, current) => result.push({name: current[0].departure}), []).value();


    for (let i = 0 ; i < vertexes.length; i++ ) {

      const city = {
        name: vertexes[i].name,
        edge: { }
      };


      for (let j = 0 ; j < deals.length; j++ ) {

        if (deals[j].departure === vertexes[i].name)  {

          if (type === 'cheapest') {
            city.edge[deals[j].arrival] = this.expenseCost(deals[j]);
          } else {
            city.edge[deals[j].arrival] = this.timeCost(deals[j]);
          }
        }

      }

      this.graph.addVertex(city.name, city.edge);
    }
  }


  /**
   * extract the main path from the main trips after when the dijkstra algorithm returns the
   * optimum path
   * @param path
   * @param deals
   * @param type
   * @returns {any[]}
   */

  extractFinalPath(path, deals, type) {
    const finalPath = [];

    for (let i = 0 ; i < path.length - 1 ; i++ ) {

      const edges = deals.filter(deal => deal.departure === path[i] && deal.arrival === path[i + 1]);

      let minEdge = edges[0];
      for (let j = 1 ; j < edges.length ; j++ ) {

        if (type === 'cheapest') {

          if (this.expenseCost(edges[j]) < this.expenseCost(minEdge)) {
            minEdge = edges[j];
          }
        } else {

          if ( this.timeCost(edges[j]) < this.timeCost(minEdge)) {
            minEdge = edges[j];
          }

        }


      }

      finalPath.push(minEdge);

    }

    return finalPath;
  }

  timeCost(trip: Trip): number {

    return +trip.duration.h + +trip.duration.m / 60;
  }

  expenseCost(trip: Trip): number {
    return trip.cost - trip.discount / 100 * trip.cost;
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
  get cheapestPathSubject(): BehaviorSubject<Trip[]> {
    return this._cheapestPathSubject;
  }

  set cheapestPathSubject(value: BehaviorSubject<Trip[]>) {
    this._cheapestPathSubject = value;
  }

  get http(): Http {
    return this._http;
  }

  set http(value: Http) {
    this._http = value;
  }

  get tripsSubject(): BehaviorSubject<TripsResponse> {
    return this._tripsSubject;
  }

  set tripsSubject(value: BehaviorSubject<TripsResponse>) {
    this._tripsSubject = value;
  }

  get trips$(): Observable<TripsResponse> {
    return this._trips$;
  }

  set trips$(value: Observable<TripsResponse>) {
    this._trips$ = value;
  }
}
