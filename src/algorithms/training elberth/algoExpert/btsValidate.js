// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Write your code here.
  return validateBstHelper(tree);
}

function validateBstHelper(tree, minValue = -Infinity, maxValue = Infinity) {
  if(tree === null) return true;
  if(tree.value < minValue || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}

const assert = require('assert');
const root = new BST(10);

root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.left.right.left = new BST(14);
root.right.right = new BST(22);

assert(validateBst(root))
