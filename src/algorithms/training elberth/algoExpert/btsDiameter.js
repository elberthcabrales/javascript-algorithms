// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// The function Compute the "height" of a tree. Height is the
// number of nodes along the longest path from the root node
// down to the farthest leaf node.

function height(node) {
  // Base Case : Tree is empty
  if (node === null) {
    return 0;
  }

  // If tree is not empty then height = 1 + max of left
  // height and right heights
  return 1 + Math.max(height(node.left), height(node.right));
}

function diamter(node) {
  // Base Case when tree is empty
  if (node === null) return 0;

  // Get the height of left and right sub-trees
  const lheight = height(node.left);
  const rheight = height(node.right);

  // Get the diameter of left and right sub-trees
  const ldiameter = diamter(node.left);
  const rdiameter = diamter(node.right);

  // Return max of the following tree:
  // 1) Diameter of left subtree
  // 2) Diameter of right subtree
  // 3) Height of left subtree + height of right subtree +1
  return Math.max(lheight + rheight, Math.max(ldiameter, rdiameter));
}

function binaryTreeDiameter(tree) {
  // Write your code here.
  return diamter(tree);
}

const assert = require('assert');

const root = new BST(1);
root.left = new BST(3);
root.left.left = new BST(7);
root.left.left.left = new BST(8);
root.left.left.left.left = new BST(9);
root.right = new BST(2);
root.left.right = new BST(4);
root.left.right.right = new BST(5);
root.left.right.right.right = new BST(6);

assert(binaryTreeDiameter(root), 6);
