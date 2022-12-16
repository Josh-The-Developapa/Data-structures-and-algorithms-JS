class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element > parent) {
                [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]];
                idx = parentIdx;
            } else {
                break
            }
        }

    }
    extractMax() {
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]]
        this.values.pop();
        this.sinkDown();
    }
    sinkDown() {
        let i = 0;
        const element = this.values[i];
        while (i < this.values.length) {
            let leftChildIdx = (2 * i) + 1;
            let rightChildIdx = (2 * i) + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < this.values.length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < this.values.length) {
                rightChild = this.values[rightChildIdx];
                if (swap == null) {
                    swap = rightChildIdx
                }
                if (swap !== null && rightChild > leftChild) {
                    swap = rightChildIdx
                }
            }
            if (swap == null) break
            [this.values[i], this.values[swap]] = [this.values[swap], this.values[i]];
            i = swap
        }
    }
}

const heap = new MaxBinaryHeap();