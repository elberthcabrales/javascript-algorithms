const maxDepth = function(root) {
  return recursive(root)
};
function recursive(node){
  if(node === null){
    return 0
  }
  return Math.max(recursive(node.left), recursive(node.right))+1
}


class Node {
  constructor(value) {
    this.val = value; //value of the Node
    this.left = null; //leftChild (will also be of the Node class)
    this.right = null; //rightChild (will also be of the Node class)
  }
}
const root = new Node(3)
root.left = new Node(9)


root.right = new Node(20)
root.right.right = new Node(7)
root.right.left = new Node(15)

console.log(maxDepth(root))
