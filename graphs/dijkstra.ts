interface IWeightedGraph {
  adjacencyList: { [propsName: string]: WeightedEdge[] };
  vertex(val: string): void;
  addEdge(vertex1: string, vertex2: string, weight: number): void;
  removeEdge(vertex1: string, vertex2: string): void;
  removeVertex(vertex: string): void;
  dijkstra(start: string, finish: string): void;
}
type WeightedEdge = {
  node: string;
  weight: number;
};

interface IPriorityQ {
  values: PQNode[];
}
type PQNode = { val: string; priority: number };

class PriorityQ implements IPriorityQ {
  values: PQNode[] = [];
  enqueue(val: string, priority: number) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue(): PQNode | undefined {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph implements IWeightedGraph {
  adjacencyList: { [propsName: string]: WeightedEdge[] } = {};
  vertex(val: string): void {
    if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
  }
  addEdge(vertex1: string, vertex2: string, weight: number): void {
    // if (
    //   !this.adjacencyList[vertex1].map((edge) => edge.node === vertex2).length ||
    //   !this.adjacencyList[vertex2].map((edge) => edge.node === vertex1).length
    // ) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
    // }
  }
  removeEdge(vertex1: string, vertex2: string): void {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((edge) => edge.node !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((edge) => edge.node !== vertex1);
    }
  }
  removeVertex(vertex: string): void {
    this.adjacencyList[vertex].forEach((edge) => {
      this.removeEdge(vertex, edge.node);
    });
    delete this.adjacencyList[vertex];
  }
  dijkstra(start: string, finish: string) {
    const nodes = new PriorityQ();
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    for (const vertex in this.adjacencyList) {
      if (vertex !== start) {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      } else {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      }
      previous[vertex] = null;
    }
    let smallest: string | undefined;
    let path: string[] = [];
    while (nodes.values.length) {
      smallest = nodes.dequeue()?.val;

      if (smallest === finish) {
        // loop through vertext and create a path between start and finish
        let resEl: string | null = finish;
        // while (resEl && previous[resEl]) {
        //   path.push(resEl);
        //   if (finish && previous[finish]) {
        //     resEl = previous[finish];
        //   }
        // }
      }
      if (smallest) {
        for (const neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const distance = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (distance < distances[nextNeighbor]) {
            distances[nextNeighbor] = distance;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, distance);
          }
        }
      }
    }
    return previous;
  }
}

const graph = new WeightedGraph();

graph.vertex("A");
graph.vertex("B");
graph.vertex("C");
graph.vertex("D");
graph.vertex("E");
graph.vertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.dijkstra("A", "E"));
console.log(graph.adjacencyList);
