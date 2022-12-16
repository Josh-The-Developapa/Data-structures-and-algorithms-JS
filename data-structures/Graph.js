class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }


    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }


    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }


    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].shift();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    // Depth first search (recursive)
    DFS(vtx) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList

        function helper(vertex) {
            if (!vertex) {
                return null
            }
            visited[vertex] = true
            result.push(vertex)

            adjacencyList[vertex].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    return helper(neighbour)
                }
            })
        }
        helper(vtx)
        console.log(result)
        return result
    }

    // Breadth First Search
    BFS(vtx) {
        const queue = [vtx]
        const res = []
        const visited = {}

        while (queue.length > 0) {
            res.push(queue[0]);
            visited[queue[0]] = true;

            this.adjacencyList[queue[0]].forEach((val) => {
                if (!visited[val]) {
                    queue.push(val)
                    visited[val] = true
                }
            })
            queue.shift();
        }
        return res
    }
}

const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g)