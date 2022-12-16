class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    return current;
  }

  shift() {
    if (!this.head) {
      return;
    }

    let currentHead = this.head;
    this.head = currentHead.next;

    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(idx) {
    if (idx > this.length || idx < 0) {
      return null;
    }

    let counter = 0;
    let pointer = this.head;

    while (counter < idx) {
      pointer = pointer.next;
      counter++;
    }
    return pointer;
  }

  set(idx, data) {
    const target = this.get(idx);

    if (!target) {
      return false;
    }
    target.data = data;
    return true;
  }

  insert(idx, data) {
    let num = this.get(idx - 1);
    let right = num.next;
    let newNode = new Node(data);
    newNode.next = right;

    num.next = newNode;

    if (idx > this.length || idx < 0) {
      return null;
    }

    if (idx === this.length) {
      this.push(newNode);
    }

    if (idx === 0) {
      this.unshift(newNode);
    }
    this.length++;

    return this;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) {
      return;
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    if (idx === 0) {
      return this.shift();
    }

    const val = this.get(idx);
    const valBefore = this.get(idx - 1);

    valBefore.next = val.next;
    this.length--;
    return this;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    const arr = [];
    const current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}
const list = new SinglyLinkedList();
list.push("hello");
list.push("over");
list.push("there");

console.log(list);
