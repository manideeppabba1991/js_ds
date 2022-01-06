var maxDepth = function(root) {
    let count = 0;
    const traverse = (node, c) => {
        if(node.left) {
            traverse(node.left, c+1);
        } else {
            count = Math.max(count, c);
        }
        if(node.right) {
            traverse(node.right, c+1);
        } else {
            count = Math.max(count, c);
        }
    }
    if(root) traverse(root, 1);
    return count;
};