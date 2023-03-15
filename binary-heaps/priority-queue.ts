interface IPriorityQueue {
    values: INode[]
    enqueue(val: number, priority:number): INode[]
    bubble(parent: number, newChild: number): INode[]
    dequeue(): INode[]
    sinkDown():void
}
interface INode {
    val:number | string
    priority:number
}
class cNode implements INode {
    constructor(public val:number | string, public priority:number) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue implements IPriorityQueue {
    values: INode[] = [];
    enqueue(val: number | string,priority:number): INode[] {
        let newNode = new cNode(val,priority)
        this.values.push(newNode)
        if(this.values.length === 1 ) return []
        let length = this.values.length - 1
        let parentIndex = Math.floor((length - 1) / 2)        
        this.bubble(parentIndex, length)
        return this.values
    }
    bubble(parentIndex: number, childIndex: number): INode[] {        
        let parent: INode = this.values[parentIndex], child: INode = this.values[childIndex];

        while (this.values[parentIndex].priority > this.values[childIndex].priority) {
            this.values[parentIndex] = child
            this.values[childIndex] = parent
        }
        return this.values
    }
    dequeue(): INode[] {
        if (!this.values.length) return []
        let end: INode | undefined;
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

        while (true) {
            let leftChildIndex = rootIndex * 2 + 1
            let rightChildIndex = rootIndex * 2 + 2
            let leftChild;
            let rightChild:INode;
            let swap = null
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex].priority
                if (leftChild < root.priority) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if ((swap === null && rightChild.priority < root.priority) || (swap !== null && leftChild && rightChild.priority < leftChild)) {
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

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue('common cold',2)
priorityQueue.enqueue('shoted',3)
priorityQueue.enqueue('joking',4)
priorityQueue.enqueue('didnt write code like a one day',1)
// priorityQueue.enqueue(11,6)

priorityQueue.dequeue() // [ 12, 11, 10, 7 ]
// priorityQueue.dequeue() // [ 12, 11, 10, 7 ]
console.log(priorityQueue.values);
