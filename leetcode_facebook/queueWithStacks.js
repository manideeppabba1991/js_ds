class QueueWithStacks {
    constructor() {
        this.in = [];
        this.out = [];
    }
    enqueue(val) {
        this.in.push(val);
    }
    dequeue() {
        if(!this.out.length) this.pushInToOut();
        return this.out.pop();
    }
    peek() {
        if(!this.out.length) this.pushInToOut();
        return this.out[this.out.length - 1];
    }
    isEmpty() {
        return this.out.length === 0 && this.in.length === 0;
    }
    pushInToOut() {
        while(this.in.length) {
            this.out.push(this.in.pop());
        }
    }
}

const test = new QueueWithStacks();
test.enqueue(2);
test.enqueue(5);
test.enqueue(9);
test.enqueue(15);
console.log(test)
console.log(test.dequeue())
console.log(test.peek())
console.log(test.dequeue())
console.log(test.enqueue(36))
console.log(test.enqueue(44))
console.log(test.dequeue())
console.log(test.peek())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.dequeue())
console.log(test.peek())
console.log(test.peek())
console.log(test.peek())