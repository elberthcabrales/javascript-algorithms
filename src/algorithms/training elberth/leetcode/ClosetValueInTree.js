function findClosestValueInBst(tree, target) {
  // Write your code here.
  return recursiveHelper(tree, target, tree.value)
};

function recursiveHelper(node, target, closest) {
  if (node == null) {
    return closest;
  }

  if(Math.abs(target - closest) > Math.abs(target - node.value)) {
    closest = node.value
  }
  if(node.value > target){
    return recursiveHelper(node.left, target, closest)
  }else{
    return recursiveHelper(node.right, target, closest)
  }
  if (node.value == target) {
    return closest;
  }

}

class Node {
  constructor(value) {
    this.value = value; //value of the Node
    this.left = null; //leftChild (will also be of the Node class)
    this.right = null; //rightChild (will also be of the Node class)
  }

}
const root = new Node(10)
root.left = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

root.right = new Node(12)
root.right.left = new Node(11)
root.right.right = new Node(15)
console.log(findClosestValueInBst(root, 13))
