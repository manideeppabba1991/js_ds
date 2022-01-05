const Node = require("./node");
const bfs = (root) => {
    const queue  = [];
    const visited = [];
    if(root) {
        queue.push(root);
    }
    while(queue.length) {
        const curr = queue.shift();
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
        visited.push(curr);
    }
    return visited;
}