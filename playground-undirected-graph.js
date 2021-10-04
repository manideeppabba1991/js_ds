const UndirectedGraph = require("./ds_base_classes/undirectedGraph");

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