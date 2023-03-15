import { Graph, IGraph } from "./graph";

interface IGraphTraversal extends IGraph {
  DFS(): string[];
}

class GraphTraversal extends Graph {
  DFSRecursive(start: string): string[] {
    const graph = this.adjacencyList;
    const traversedList: string[] = [];
    const visited: { [propName: string]: boolean } = {};
    (function traverse(vertex: string): null | undefined {
      if (!vertex) return null;
      traversedList.push(vertex);
      visited[vertex] = true;
      const vertexEdges: string[] = graph[vertex];
      for (let i = 0; i < vertexEdges.length; i++) {
        if (!visited[vertexEdges[i]]) {
          traverse(vertexEdges[i]);
        }
      }
    })(start);
    return traversedList;
  }
  DFSIterative(start: string): string[] {
    const traversedList: string[] = [];
    const visited: { [propName: string]: boolean } = {};
    const stack: string[] = [];
    stack.push(start);
    while (stack.length >= 1) {
      let popped: string | undefined = stack.pop();
      if (popped !== undefined) {
        if (!visited[popped]) {
          traversedList.push(popped);
          visited[popped] = true;
          this.adjacencyList[popped].forEach((neighbor) => stack.push(neighbor));
        }
      }
    }
    return traversedList;
  }
  BFS(start: string): string[] {
    const traversedList: string[] = [];
    const visited: { [propName: string]: boolean } = {};
    const queue: string[] = [start];
    visited[start] = true;
    while (queue.length) {
      const shifted: string | undefined = queue.shift();
      if (shifted !== undefined) {
        traversedList.push(shifted);
        this.adjacencyList[shifted].reverse().forEach((neighbor) => {
          if (!visited[neighbor]) {
            queue.push(neighbor);
            visited[neighbor] = true;
          }
        });
      }
    }

    return traversedList;
  }
}

const graph = new GraphTraversal();
// for DFSearches ->
graph.vertex("A");
graph.vertex("B");
graph.vertex("C");
graph.vertex("D");
graph.vertex("E");
graph.vertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
// for BFSearch ->
// grap
console.log(graph.adjacencyList);
console.log(graph.BFS("A")); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
