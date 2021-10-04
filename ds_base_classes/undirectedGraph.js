class UndirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(v) {
        if(!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }

    addEdge(n1, n2) {
        if (this.adjacencyList[n1] && !this.adjacencyList[n1].includes(n2)) {
            this.adjacencyList[n1].push(n2);
        }
        if (this.adjacencyList[n2] && !this.adjacencyList[n2].includes(n1)) {
            this.adjacencyList[n2].push(n1);
        }
    }
    removeEdge(n1, n2) {
        if(this.adjacencyList[n1]) {
            this.adjacencyList[n1] = this.adjacencyList[n1].filter((rec) => rec != n2);
        }
        if(this.adjacencyList[n2]) {
            this.adjacencyList[n2] = this.adjacencyList[n2].filter((rec) => rec != n1);
        }
    }
    removeVertex(v) {
        if(this.adjacencyList[v] && this.adjacencyList[v].length) {
            this.adjacencyList[v].forEach(e => {
                this.removeEdge(v, e);
            });
        }
        delete this.adjacencyList[v];
    }
}

module.exports = UndirectedGraph;