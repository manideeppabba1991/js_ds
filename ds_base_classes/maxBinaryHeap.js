class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(num) { // O(logn) - runtime
        if (!this.values) {
            this.values = [];
        }
        this.values.push(num);
        let currentIndex = this.values.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.values[parentIndex] < this.values[currentIndex]) {
                const temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[currentIndex];
                this.values[currentIndex] = temp;
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
        return this.values;
    }

    extractMax() { // runtime - O(logn)
        if (!this.values || !this.values.length) {
            return null;
        }

        const maxItem = this.values[0];
        const lastItem = this.values.pop();

        if (!this.values.length) {
            return maxItem;
        }

        this.values[0] = lastItem;

        let i = 0;

        while (this.values.length > (2 * i) + 1 || this.values.length > (2 * i) + 2) {
            let currentNode = this.values[i];
            let leftNode = (i + i + 1) < this.values.length ? this.values[(2 * i) + 1] : null;
            let rightNode = (i + i + 2) < this.values.length ? this.values[(2 * i) + 2] : null;
            let bigIndex = this.values.length;
            if (leftNode && rightNode && currentNode < leftNode && currentNode < rightNode) {
                bigIndex = leftNode > rightNode ? (i + i + 1) : (i + i + 2);
            } else if (leftNode && leftNode > currentNode) {
                bigIndex = (2 * i) + 1;
            } else if (rightNode && rightNode > currentNode) {
                bigIndex = (2 * i) + 2;
            } else {
                break;
            }

            this.values[i] = this.values[bigIndex];
            this.values[bigIndex] = currentNode;
            i = bigIndex;
        }

        return maxItem;
    }

    isValid() { // runtime - O(n)
        if (!this.values) {
            this.values = [];
        }
        let result = true;
        for (let i = 0; i < this.values.length; i++) {
            const leftNode = 2 * i + 1;
            const rightNode = 2 * i + 2;
            if (leftNode > (this.values.length - 1) || rightNode > (this.values.length - 1)) {
                break;
            }
            if (this.values[leftNode] > this.values[i] || this.values[rightNode] > this.values[i]) {
                result = false;
                break;
            }
        }
        return result;
    }
}

module.exports = MaxBinaryHeap;

