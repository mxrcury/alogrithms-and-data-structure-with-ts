export interface IGraph {
  adjacencyList: { [propsName: string]: string[] };
  vertex(val: string): void;
  addEdge(vertex1: string, vertex2: string): void;
  removeEdge(vertex1: string, vertex2: string): void;
  removeVertex(vertex: string): void;
}

class Graph implements IGraph {
  adjacencyList: { [propsName: string]: string[] } = {};
  vertex(val: string): void {
    if (!this.adjacencyList[val]) this.adjacencyList[val] = [];
  }
  addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyList[vertex1].includes(vertex2) || !this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1: string, vertex2: string): void {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((val) => val !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((val) => val !== vertex1);
    }
  }
  removeVertex(vertex: string): void {
    this.adjacencyList[vertex].forEach((edge) => {
      this.removeEdge(vertex, edge);
    });
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();

graph.vertex("Lviv");
graph.vertex("NewYork");
graph.vertex("Tokyo");
graph.addEdge("Lviv", "NewYork");
graph.addEdge("Tokyo", "Lviv");
graph.addEdge("Tokyo", "NewYork");
graph.removeVertex("Tokyo");
console.log(graph.adjacencyList);

export { Graph };
