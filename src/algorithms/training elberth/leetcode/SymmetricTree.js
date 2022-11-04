const isSymmetric = function(root) {
  return recursive(root.left, root.right)
};
function recursive(left, right){
  if(left ===null || right === null) return left === right; //if both are null return true
  if(left.val !== right.val) return false;
  return recursive(left.left, right.right) && recursive(left.right, right.left)
}

class Node {
  constructor(value) {
    this.val = value; //value of the Node
    this.left = null; //leftChild (will also be of the Node class)
    this.right = null; //rightChild (will also be of the Node class)
  }

}
const root = new Node(1)
root.left = new Node(2)
root.left.left = new Node(3)
root.left.right = new Node(4)

root.right = new Node(2)
root.right.left = new Node(4)
root.right.right = new Node(3)
console.log(isSymmetric(root))
