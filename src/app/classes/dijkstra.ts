import {PriorityQueue} from './priority-queue';


export class Dijkstra {

  infinity = 1 / 0;
  vertices = {};


  addVertex(name: string, edges: any) {
    this.vertices[name] = edges;
  }


  shortestPath(start: string, finish: string) {

    let smallest,
      vertex,
      neighbor,
      alt;

    const nodes = new PriorityQueue(),
      distances = {},
      previous = {},
      path = [];

    for (vertex in this.vertices) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(0, vertex);
      }else {
        distances[vertex] = this.infinity;
        nodes.enqueue(this.infinity, vertex);
      }

      previous[vertex] = null;
    }

    while (!nodes.empty()) {


      smallest = nodes.dequeue();

      if (smallest === finish) {

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (!smallest || distances[smallest] === this.infinity) {
        continue;
      }

      for (neighbor in this.vertices[smallest]) {
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;
          nodes.enqueue(alt, neighbor);
        }
      }
    }

    return path.concat(start).reverse();
  }
}


