class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop() {
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;

        return this;
    }
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;

        return this;
    }
    unshift(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = this.head;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;

        this.length++;
        return this;
    }
    get(idx) {
        let counter1 = 0;
        let counter2 = this.length;
        let current1 = this.head;
        let current2 = this.tail;

        let middle = Math.floor(this.length / 2);

        if (idx <= middle) {
            while (counter1 < idx) {
                current1 = current1.next;
                counter1++;
            }
        } else {
            while (counter2 > idx) {
                current2 = current2.prev;
                counter2--;
            }
        }
        return current1 ? current1 : current2;
    }
    set(idx, val) {
        const node = this.get(idx);
        node.val = val;
        return true;
    }
    remove(idx) {
        const node = this.get(idx);

        if (!node) {
            return false;
        }

        if (idx === this.length - 1) {
            this.pop();
        } else if (idx === 0) {
            this.shift();
        } else {
            this.head.next = node.next;
            node.next.prev = this.head;
            node.next = null;
            node.prev = null;
        }

        this.length--;

        return node;
    }
    insert(idx, val) {
        const node = this.get(idx);
        const newNode = new Node(val);

        if (idx === 0) {
            return this.unshift(newNode)
        }

        if (idx === this.length - 1) {
            return this.push(newNode)
        }

        node.prev.next = newNode
        newNode.prev = node.prev
        node.prev = newNode;
        newNode.next = node;

        this.length++;
        return this
    }
    reverse() {
        //1. Swap the head with the tail

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        // 2.Reverse list first in the way you would a singly linked list .
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        // 3. Now time to sort out the issue of the prev pointer for each node in the doubly linked list.(Loop through
        // the doubly linked list and point each node's prev pointer to the node before it.)

        let pointer = this.head;

        for (let i = 0; i < this.length - 1; i++) {
            let nextNode = pointer.next;
            nextNode.prev = pointer;
            pointer = pointer.next;
        }

        // 4.Set the first elements prev pointer to be null to finalise the reverse list 

        this.head.prev = null;

        // 5.Return the linked list

        return this;
    }

}

const list = new DoublyLinkedList();
list.push(1).push(2).push(3);
