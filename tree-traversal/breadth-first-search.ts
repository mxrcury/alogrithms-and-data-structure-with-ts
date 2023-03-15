import { BinarySearchTree as Tree, TNode, ITree as IBSTree } from '../binary-search-tree'

interface ITree extends IBSTree {
    breadthFirstSearch(): number[]
}
class BinarySearchTree extends Tree implements ITree {
    breadthFirstSearch(): number[] {
        if(!this.root) return []
        let node:TNode | undefined = this.root
        const data:Array<number>= [], queue:Array<TNode> = [];
        queue.push(node)
        while(queue.length){
            node = queue.shift()
            if(node){
                data.push(node.value)
                if(node.left) queue.push(node.left)
                if(node.right)queue.push(node.right)
            } else break
        }
        return data
    }
}
const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(2)
tree.insert(1)
tree.insert(13)
tree.insert(19)
tree.insert(11)
tree.insert(0.5)
tree.insert(12)
tree.insert(4)

//               10
//            2      13
//          1   4  11  19 
    //   0.5         12
// console.log(tree.breadthFirstSearch()) // [10, 2, 13, 1, 4, 11, 19, 0.5, 12]
