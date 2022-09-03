// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

function heightBalancedBinaryTree(tree) {
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(node) {
  if (node === null) return new TreeInfo(true, -1);

  const leftSubtreeInfo = getTreeInfo(node.left);
  const rightSubTreeInfo = getTreeInfo(node.right);

  const isBalanced = leftSubtreeInfo.isBalanced
    && rightSubTreeInfo.isBalanced
    && Math.abs(leftSubtreeInfo.height - rightSubTreeInfo.height) <= 1;
  const height = Math.max(leftSubtreeInfo.height, rightSubTreeInfo.height) + 1;

  return new TreeInfo(isBalanced, height);
}

const assert = require('assert');

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.right = new BinaryTree(6);
root.left.right.left = new BinaryTree(7);
root.left.right.right = new BinaryTree(8);

assert(heightBalancedBinaryTree(root));
