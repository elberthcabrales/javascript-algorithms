// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  const sortedNodeValues = [];
  inOrderTraverse(tree, sortedNodeValues);
  const size = sortedNodeValues.length - 1;
  return sortedNodeValues[size - k];
}

function inOrderTraverse(node, sortedNodeValues) {
  if (node === null) return;

  inOrderTraverse(node.left, sortedNodeValues);
  sortedNodeValues.push(node.value);
  inOrderTraverse(node.right, sortedNodeValues);
}

const root = new BST(10);

root.left = new BST(2);
root.left.left = new BST(4);
root.left.right = new BST(5);
root.right = new BST(12);

findKthLargestValueInBst(root, 2);
