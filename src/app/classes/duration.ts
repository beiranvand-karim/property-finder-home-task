export class Duration {

  public static ZERO_STRING = '0';

  private _h: string;
  private _m: string;


  /**
   * here goes the getters and setters
   */

  get m(): string {
    return this._m;
  }

  set m(value: string) {
    this._m = value;
  }
  get h(): string {
    return this._h;
  }

  set h(value: string) {
    this._h = value;
  }
}
