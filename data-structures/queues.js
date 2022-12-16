class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = this.first;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return;
        }

        let currentfirst = this.first;
        this.first = currentfirst.next;

        if (this.size === 1) {
            this.last = null;
        }
        this.size--;
        return currentfirst;
    }
}