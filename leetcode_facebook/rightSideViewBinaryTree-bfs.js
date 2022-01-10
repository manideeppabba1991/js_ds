const rightViewBfs = (root) => {
    if(!root) return [];
    const result = [];
    const queue = [root];
    let levelItems = 1;
    let currentIter = 0;
    while(queue.length) {
        currentIter++;
        let curr = queue.shift();
        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
        
        if(levelItems === currentIter) {
            levelItems = queue.length;
            currentIter = 0;
            result.push(curr.val);
        }
    }
    return result;
}