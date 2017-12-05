import {PriorityNode} from './priority-node';


export class PriorityQueue {


  private _nodes: PriorityNode[] = [];


  enqueue(priority: number, key: number) {
    this.nodes.push(new PriorityNode(key, priority));
    this.nodes.sort(
      function(a, b) {
        return a.priority - b.priority;
      }
    );
  }


  dequeue(): number {
    return this.nodes.shift().key;
  }

  empty(): boolean {
    return !this.nodes.length;
  }


  get nodes(): PriorityNode[] {
    return this._nodes;
  }

  set nodes(value: PriorityNode[]) {
    this._nodes = value;
  }
}
