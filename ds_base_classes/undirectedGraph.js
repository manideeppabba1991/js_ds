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
    DFS_recursion(root) {
        if (!root) return [];
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(start) {
            if (!start || !adjacencyList[start] || !adjacencyList[start].length) return null;
            visited[start] = true;
            result.push(start);
            adjacencyList[start].forEach(neighbor => {
                if (!visited[neighbor]) dfs(neighbor);
            });
        })(root);
        return result;
    }
    DFS_iterative (root) {
        const result = [];
        const callStack = [];
        const visited = {};
        let currentNode;
        
        if(root) callStack.push(root);
        
        while (callStack.length) {
            currentNode = callStack.pop();
            
            if(visited[currentNode]) continue;

            visited[currentNode] = true;
            result.push(currentNode);
            
            if(this.adjacencyList[currentNode] && this.adjacencyList[currentNode].length) {
                callStack.push(...this.adjacencyList[currentNode]);
            }
        }
        return result;
    }
    BFS(root) {
        const callQueue = [];
        const visited = {};
        const result = [];
        let currentNode;
        if(root) callQueue.push(root);
        while(callQueue.length) {
            currentNode = callQueue.shift();
            if(visited[currentNode]) continue;
            visited[currentNode] = true;
            result.push(currentNode);
            if (this.adjacencyList[currentNode] && this.adjacencyList[currentNode].length) {
                callQueue.push(...this.adjacencyList[currentNode]);
            }
        }
        return result;
    }
}

module.exports = UndirectedGraph;