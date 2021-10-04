const UndirectedGraph = require("./ds_base_classes/undirectedGraph");

/* Setup a sample undirected graph */
setupSampleUndirectedGraph = (g) => {
    if(!g) g = new UndirectedGraph();
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    vertices.forEach(rec => { g.addVertex(rec) });

    const edges = [['A', 'D'], ['A', 'F'], ['B', 'J'], ['B', 'D'], ['C', 'E'], ['C', 'I'], ['C', 'J'], ['D', 'B'], ['D', 'G'], ['E', 'H'], ['F', 'A'], ['F', 'D'], ['F', 'H'], ['G', 'D'], ['H', 'E'], ['H', 'F'], ['I', 'C'], ['J', 'B'], ['J', 'C']];
    edges.forEach(rec => { g.addEdge(...rec) });
    return g;
};

/* DFS traversal method */
dfs_undirectedGraph = (gr, root) => {
    const result = [];
    const visited = {};
    const adjacencyList = gr.adjacencyList;
    (function dfs_recur(el) {
        if (adjacencyList && adjacencyList[el] && adjacencyList[el].length) {
            visited[el] = true;
            result.push(el);
            adjacencyList[el].forEach(rec => {
                if (!visited[rec]) {
                    dfs_recur(rec);
                }
            });
        } else {
            return;
        }
    })(root);
    return result;
};


/* ######## testing undirected graph methods ####### */
console.log("######## testing undirected graph methods #######");
const ug = new UndirectedGraph();
ug.addVertex("Mumbai");
ug.addVertex("Delhi");
ug.addVertex("Hyderabad");
ug.addVertex("Chennai");
ug.addEdge("Mumbai", "Chennai");
ug.addEdge("Mumbai", "Delhi");
ug.addEdge("Mumbai", "Hyderabad");
ug.addEdge("Chennai", "Delhi");
ug.addEdge("Chennai", "Delhi");
ug.addEdge("Chennai", "Mumbai");
ug.addEdge("Chennai", "Hyderabad");
ug.addEdge("Delhi", "Hyderabad");
ug.addEdge("Mumbai", "Hyderabad");
console.log(ug);
ug.removeVertex("Hyderabad");
console.log(ug);

/*
* ######## DEPTH FIRST SEARCH TRAVERSAL - DFS traversal - undirected graph #######
*
*/

console.log("######## DFS RECURSIVE  undirected graph #######");
const dfs_ug = new UndirectedGraph();
setupSampleUndirectedGraph(dfs_ug);
console.log("# Initial Graph with vertices and edges: ", dfs_ug);

console.log("DFS (A): ", dfs_undirectedGraph(dfs_ug, "A"));
console.log("DFS (B): ", dfs_undirectedGraph(dfs_ug, "B"));
console.log("DFS (C): ", dfs_undirectedGraph(dfs_ug, "C"));
console.log("DFS (D): ", dfs_undirectedGraph(dfs_ug, "D"));
console.log("DFS (E): ", dfs_undirectedGraph(dfs_ug, "E"));
console.log("DFS (F): ", dfs_undirectedGraph(dfs_ug, "F"));
console.log("DFS (G): ", dfs_undirectedGraph(dfs_ug, "G"));
console.log("DFS (H): ", dfs_undirectedGraph(dfs_ug, "H"));
console.log("DFS (I): ", dfs_undirectedGraph(dfs_ug, "I"));
console.log("DFS (J): ", dfs_undirectedGraph(dfs_ug, "J"));


/*
* ######## DEPTH FIRST SEARCH TRAVERSAL - DFS traversal - undirected graph #######
*
*/
console.log("######## DFS RECURSIVE undirected graph -- Improvised inbuilt class method #######");
const g1 = new UndirectedGraph();
g1.addVertex("A");
g1.addVertex("B");
g1.addVertex("C");
g1.addVertex("D");
g1.addVertex("E");
g1.addVertex("F");

g1.addEdge("A", "B");
g1.addEdge("A", "C");
g1.addEdge("B", "D");
g1.addEdge("C", "E");
g1.addEdge("D", "E");
g1.addEdge("D", "F");
g1.addEdge("E", "F");

console.log(g1);

console.log("########## DFS recursive #######");
console.log("DFS (A): ", g1.DFS_recursion("A"));
console.log("DFS (B): ", g1.DFS_recursion("B"));
console.log("DFS (C): ", g1.DFS_recursion("C"));
console.log("DFS (D): ", g1.DFS_recursion("D"));
console.log("DFS (E): ", g1.DFS_recursion("E"));
console.log("DFS (F): ", g1.DFS_recursion("F"));

console.log("########## DFS iterative #######");
console.log("DFS (A): ", g1.DFS_iterative("A"));
console.log("DFS (B): ", g1.DFS_iterative("B"));
console.log("DFS (C): ", g1.DFS_iterative("C"));
console.log("DFS (D): ", g1.DFS_iterative("D"));
console.log("DFS (E): ", g1.DFS_iterative("E"));
console.log("DFS (F): ", g1.DFS_iterative("F"));

console.log("########## BFS iterative #######");
console.log("BFS (A): ", g1.BFS("A"));
console.log("BFS (B): ", g1.BFS("B"));
console.log("BFS (C): ", g1.BFS("C"));
console.log("BFS (D): ", g1.BFS("D"));
console.log("BFS (E): ", g1.BFS("E"));
console.log("BFS (F): ", g1.BFS("F"));