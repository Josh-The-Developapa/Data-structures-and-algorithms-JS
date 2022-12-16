class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this
        }

        if (this.root.left === null || this.root.right === null) {
            if (newNode.value > this.root.value) {
                this.root.right = newNode
            } else {
                this.root.left = newNode
            }
            return this
        }

        let current = this.root;

        while (current.right || current.left) {
            if (newNode.value > current.value) {
                if (!current.right) {
                    break;
                }
                current = current.right;

            } else {
                if (!current.left) {
                    break;
                }
                current = current.left;
            }
        }

        if (newNode.value > current.value) {
            current.right = newNode;
        } else {
            current.left = newNode;
        }

        return this

    }
    find(value) {
        if (!this.root) {
            return
        }

        if (this.root.value === value) {
            return this.root
        }

        let current = this.root;

        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            if (value > current.value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        return
    }
    remove(val) {
        const node = this.findVal(val);
        let current = this.root;

        while (current.value) {
            if (current.right.value == node.value || current.left.value == node.value) {
                break
            }
            if (node.value > current.value) {
                current = current.right
            } else {
                current = current.left
            }
        }

        if (current.left == node) {
            current.left = node.left
        }
        if (current.right == node) {
            current.right = node.right
        }

        return this;

    }
    BFS() {
        // BreadthFirstSearch
        const queue = [];
        queue.push(this.root);
        const res = [];

        while (queue.length > 0) {
            res.push(queue[0]);
            if (queue[0].left !== null) {
                queue.push(queue[0].left)
            }
            if (queue[0].right !== null) {
                queue.push(queue[0].right)
            }
            queue.shift();
        }

        let i = 0;

        while (i < res.length) {
            res[i] = res[i].value;
            i++
        }
        return res
    }
    DFSPreOrder() {
        //DepthFirstSearch - PreOrder
        const res = [];
        const current = this.root;

        function helper(val) {
            res.push(val.value);

            if (val.left) {
                helper(val.left);
            }

            if (val.right) {
                helper(val.right);
            }
        }
        helper(current);
        return res
    }
    DFSPostOrder() {
        //DepthFirstSearch - PostOrder
        const res = [];
        const current = this.root;

        function helper(val) {
            if (val.left) {
                helper(val.left);
            }
            if (val.right) {
                helper(val.right);
            }
            res.push(val.value)
        }
        helper(current);
        return res
    }
    DFSInOrder() {
        //DepthFirstSearch - InOrder
        const res = [];
        const current = this.root;

        function helper(val) {
            if (val.left) {
                helper(val.left);
            }
            res.push(val.value)

            if (val.right) {
                helper(val.right);
            }
        }
        helper(current);
        return res
    }
}
