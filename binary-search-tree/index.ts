interface ITree {
  root: TNode | null
  insert(val:number):void | null
  find(val:number):TNode | null
}
interface INode {
  value: number
  right: TNode | null
  left: TNode | null
}
type TNode = {
  value: number
  right: TNode | null
  left: TNode | null
}
class cNode implements INode {
  right: TNode | null;
  left: TNode | null;
  constructor(public value: number) {
    this.value = value
    this.right = null
    this.left = null
  }
}
class BinarySearchTree implements ITree {
  root: TNode | null;
  constructor() {
    this.root = null
  }
  insert(val:number) {
    const newNode = new cNode(val)
    if(!this.root) {
      this.root = newNode
      return;
    }
    let parent:TNode | null= null;
    let curr:TNode | null = this.root
    while(curr) {
      if(val === curr.value) return null
      if(val > curr.value) {
        parent = curr
        curr = curr.right
      } else {
        parent = curr
        curr = curr.left
      }
    }
    if(parent && parent.value > val) {
      parent.left = newNode
    }
    if (parent && parent.value < val){
      parent.right = newNode
    }
  }
  find(val:number) {
    if(!this.root) return null
    let founded:TNode | null = null;
    let curr:TNode | null = this.root
    while(curr) {
      if(val === curr.value) {
        founded = curr
        break
      }
      if(val > curr.value) {
        curr = curr.right
      } else {
        curr = curr.left
      }
    }
    return founded
  }
}
const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(2)
tree.insert(1)
tree.insert(-10)
tree.insert(1.2)
tree.insert(1.1)



export { TNode, BinarySearchTree, ITree }