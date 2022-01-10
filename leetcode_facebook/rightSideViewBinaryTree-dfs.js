const rightViewDfs = (root) => {
    if(!root) return [];
    const result = [];
    
    const traverse = (node, count) => {
        if(count > result.length) {
            result.push[node.val];
        }
        if(node.right) traverse(node.right, count+1);
        if(node.left) traverse(node.left, count+1);
    }
    if(root) {
        traverse(root, 1);
    }
    return result;
}