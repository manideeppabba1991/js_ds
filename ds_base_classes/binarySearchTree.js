const Node = require("./node");
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    find(val) {
        if(!this.root) return -1;
        let curr = this.root;

        while(curr) {
            if(val === curr.val) {
                return curr;
            } else if (val > curr.val) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        return -1;
    }

    insert(val) {
        if(!this.root) {
            this.root = new Node(val);
            return this;
        }
        let curr = this.root;

        if(val < this.root.val) {
            const newRoot = new Node(val);
            newRoot.right = this.root;
            this.root = newRoot;
            return this;
        }

        while(curr) {
            if(val === curr.val) return undefined;
            if(val > curr.val) {
                if(curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = new Node(val);
                    return this;
                }
            } else {
                if(curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = new Node(val);
                    return this;
                }
            }
        }
        return -1;
    }
    remove(val) { // Incomplete
        if(!this.root) {
            return true;
        }

        let curr = this.root;
        let prev = curr;
            
        while(curr) {
            if(val === curr.val) {
                if(prev === curr) {
                    this.root = null;
                    return true;
                } else {
                    prev.right = curr.right;
                    prev.left = curr.left;
                }
            } else if(val > curr.val) {
                if(curr.right) {
                    prev = curr;
                    curr = curr.right;
                } else {
                    return false;
                }
            } else {
                if(curr.left) {
                    prev = curr;
                    curr = curr.left;
                } else {
                    return false;
                }
            }
        }
    }
}


var test = new BinarySearchTree();
test.insert(10);
test.insert(21);
test.insert(26);
test.insert(2);
console.log(test);
console.log(test.find(2));