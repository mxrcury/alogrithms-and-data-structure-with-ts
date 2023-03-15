interface IBinaryHeap {
    values: number[]
    insert(val: number): number[]
    bubble(parent: number, newChild: number): number[]
    extractMax(): number[]
}

class MaxBinaryHeap implements IBinaryHeap {
    values: number[] = [];
    insert(val: number): number[] {
        this.values.push(val)
        let length = this.values.length - 1
        let parentIndex = Math.floor((length - 1) / 2)
        this.bubble(parentIndex, length)
        return this.values
    }
    bubble(parentIndex: number, childIndex: number): number[] {
        let parent: number = this.values[parentIndex], child: number = this.values[childIndex];
        // console.log(parent, child);
        while (this.values[parentIndex] < this.values[childIndex]) {
            this.values[parentIndex] = child
            this.values[childIndex] = parent
        }
        return this.values
    }
    extractMax(): number[] {
        if (!this.values.length) return []
        let end: number | undefined;
        end = this.values.pop()
        if (end) {
            this.values[0] = end
            this.sinkDown()
        }
        return this.values
    }
    sinkDown() {
        let rootIndex = 0
        let root = this.values[0]
        let length = this.values.length
        console.log(`root - ${root}`);

        while (true) {
            let leftChildIndex = rootIndex * 2 + 1
            let rightChildIndex = rootIndex * 2 + 2
            let leftChild;
            let rightChild = this.values[rightChildIndex]
            let swap = null
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild > root) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if ((swap === null && rightChild > root) || (swap !== null && leftChild && rightChild > leftChild)) {
                    swap = rightChildIndex
                }
            }
            if (!swap) break
            this.values[rootIndex] = this.values[swap]
            this.values[swap] = root
            rootIndex = swap
        }
    }
}
const binaryHeap = new MaxBinaryHeap()
binaryHeap.insert(10)
binaryHeap.insert(12)
binaryHeap.insert(14)
binaryHeap.insert(7)
binaryHeap.insert(11)

binaryHeap.extractMax() // [ 12, 11, 10, 7 ]
console.log(binaryHeap.values);
