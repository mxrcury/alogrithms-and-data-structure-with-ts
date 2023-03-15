import { BinarySearchTree as Tree, TNode, ITree as IBSTree } from '../binary-search-tree'

interface ITree extends IBSTree {
    depthFirstSearchPreOrder():number[]
    depthFirstSearchPostOrder():number[] 
}
class BinarySearchTree extends Tree implements ITree {
    depthFirstSearchPreOrder():number[] {
        if(!this.root) return []
        const data:number[] = [];
        function getDeeper(node:TNode):void{ 
            if(!node) return;
            data.push(node.value)
            if(node.left) getDeeper(node.left)
            if(node.right) getDeeper(node.right)
        }
        getDeeper(this.root)
        return data
    }
    depthFirstSearchPostOrder():number[] {
        if(!this.root) return []
        const data:number[] = []
        function getDeeper(node:TNode):void {
            if(node.left) getDeeper(node.left)
            if(node.right) getDeeper(node.right)
            data.push(node.value)
        }
        getDeeper(this.root)

        return data
    }
    depthFirstSearchInOrder():number[] {
        if(!this.root) return []
        const data:number[] = []
        function getDeeper(node:TNode):void {
            if(node.left) getDeeper(node.left)
            data.push(node.value)
            if(node.right) getDeeper(node.right)
        }
        getDeeper(this.root)
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
//       0.5         12
console.log(tree.depthFirstSearchPreOrder());// [10, 2, 1, 0.5, 4,13, 11, 12, 19]
console.log(tree.depthFirstSearchPostOrder()); // [0.5, 1, 4, 2, 12, 11, 19, 13, 10]
console.log(tree.depthFirstSearchInOrder()); // 0.5, 1, 2, 4, 10,11, 12, 13, 19]