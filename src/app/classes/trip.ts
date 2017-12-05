import {Duration} from './duration';

export class Trip {

  public static EMPTY = '';
  public static ZERO = 0;

  private _transport: string;
  private _departure: string;
  private _arrival: string;
  private _duration: Duration;
  private _cost: number;
  private _discount: number;
  private _reference: string;


  /**
   * here goes the getters and setters
   */

  get reference(): string {
    return this._reference;
  }

  set reference(value: string) {
    this._reference = value;
  }
  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }
  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }
  get duration(): Duration {
    return this._duration;
  }

  set duration(value: Duration) {
    this._duration = value;
  }
  get arrival(): string {
    return this._arrival;
  }

  set arrival(value: string) {
    this._arrival = value;
  }
  get departure(): string {
    return this._departure;
  }

  set departure(value: string) {
    this._departure = value;
  }
  get transport(): string {
    return this._transport;
  }

  set transport(value: string) {
    this._transport = value;
  }

}


