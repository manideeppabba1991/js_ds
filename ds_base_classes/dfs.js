const Node = require("./node");

const dfsPreOrder = (root) => {
    const result = [];
    let curr = root;
    const preOrder = (node) => {
        result.push(curr);
        if(curr.left) preOrder(curr.left);
        if(curr.right) preOrder(curr.right);
    }
    preOrder(curr);
    return result;
}

const dfsInOrder = (root) => {
    const result = [];
    let curr = root;
    inOrder(curr);
    const inOrder = (node) => {
        if(curr.left) inOrder(curr.left);
        result.push(curr);
        if(curr.right) inOrder(curr.right);
    }
    return result;
}

const dfsPostOrder = (root) => {
    const result = [];
    let curr = root;
    postOrder(curr);
    const postOrder = (node) => {
        if(curr.left) postOrder(curr.left);
        if(curr.right) postOrder(curr.right);
        result.push(curr);
    }
    return result;
}
