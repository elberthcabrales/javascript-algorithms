// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSuccessor(tree, node) {
  const values = [];
  inOrder(tree, node, values);
  const findIdx = values.findIndex((i) => i === node);
  return values[findIdx + 1];
}

function inOrder(tree, node, values = []) {
  if (tree == null) {
    return;
  }

  inOrder(tree.left, node, values);
  values.push(tree);
  inOrder(tree.right, node, values);
}

const assert = require('assert');

const root = new BST(1);
root.left = new BST(2);
root.left.parent = root;
root.right = new BST(3);
root.right.parent = root;
root.left.left = new BST(4);
root.left.left.parent = root.left;
root.left.right = new BST(5);
root.left.right.parent = root.left;
root.left.left.left = new BST(6);
root.left.left.left.parent = root.left.left;
const node = root.left.right;

assert(findSuccessor(root, node), 1);
