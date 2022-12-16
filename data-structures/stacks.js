class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        }

        newNode.next = this.first;
        this.first = newNode;
        this.last.next = null;
        this.size++;

        return this.size;
    }
    pop() {
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

const stack = new Stack();