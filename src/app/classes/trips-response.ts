

import {Trip} from './trip';

export class TripsResponse {


  public static EUR_CURRENCY = 'EUR';


  private _currency: string;
  private _deals: Trip[];


  /**
   * here goes the getters and setters
   */
  get deals(): Trip[] {
    return this._deals;
  }

  set deals(value: Trip[]) {
    this._deals = value;
  }
  get currency(): string {
    return this._currency;
  }

  set currency(value: string) {
    this._currency = value;
  }
}
