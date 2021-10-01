const PriorityQueue = require('./ds_base_classes/priorityQueue');

const pq = new PriorityQueue();
pq.enqueue("Hello", 6);
pq.enqueue("world", 3);
pq.enqueue("kitty", 5);
pq.enqueue(["moon", "sun"], 0);
pq.enqueue(96, 2);
pq.enqueue({'a': 1}, 0);

console.log(pq);

pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);
pq.dequeue();
console.log(pq);