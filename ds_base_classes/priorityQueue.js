const PriorityNode = require("./priorityNode");

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priroity) {
        if(typeof(priroity) !== 'number') {
            return false;
        }

        this.values.push(new PriorityNode(val, priroity));

        let currentIndex = this.values.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1)/2);
            if (this.values[parentIndex].priority > this.values[currentIndex].priority) {
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

    dequeue() {
        if (!this.values || !this.values.length) return false;
        const minItem = this.values[0];
        const lastItem = this.values.pop();
        if (!this.values.length) {
            return lastItem;
        }
        this.values[0] = lastItem;
        let currentIndex = 0;
        while (((2*currentIndex) + 1) < this.values.length || ((2*currentIndex) + 2) < this.values.length) {
            let bigIndex = currentIndex;
            let leftIdx = ((2 * currentIndex) + 1) < this.values.length ? (2 * currentIndex) + 1 : null;
            let rightIdx = ((2 * currentIndex) + 2) < this.values.length ? (2 * currentIndex) + 2 : null;
            if (leftIdx && rightIdx && (this.values[currentIndex].priority > this.values[leftIdx].priority && this.values[currentIndex].priority > this.values[rightIdx].priority)) {
                bigIndex = this.values[leftIdx].priority < this.values[rightIdx].priority ? leftIdx : rightIdx;
            } else if (leftIdx && this.values[currentIndex].priority > this.values[leftIdx].priority) {
                bigIndex = leftIdx;
            } else if (rightIdx && this.values[currentIndex].priority > this.values[rightIdx].priority) {
                bigIndex = rightIdx;
            } else {
                break;
            }
            const temp = this.values[currentIndex];
            this.values[currentIndex] = this.values[bigIndex];
            this.values[bigIndex] = temp;
            currentIndex = bigIndex;
        }

        return minItem;
    }
}

module.exports = PriorityQueue;