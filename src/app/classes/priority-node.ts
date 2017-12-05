

export class PriorityNode {



  private _key: number;
  private _priority: number;

  constructor(key: number, priority: number) {
    this.key = key;
    this.priority = priority;
  }


  get key(): number {
    return this._key;
  }

  set key(value: number) {
    this._key = value;
  }
  get priority(): number {
    return this._priority;
  }

  set priority(value: number) {
    this._priority = value;
  }

}
