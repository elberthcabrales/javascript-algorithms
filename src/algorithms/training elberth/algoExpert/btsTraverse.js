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

function postOrder(tree) {
  if(tree == null) {
    return;
  }

  postOrder(tree.left);
  postOrder(tree.right);
  console.log(tree.value);
}

function inOrder(tree) {
  if(tree == null) {
    return;
  }

  inOrder(tree.left);
  console.log(tree.value);
  inOrder(tree.right);
}

function preorder(tree){
  if(tree == null) {
    return;
  }
  console.log(tree.value);
  preorder(tree.left);
  preorder(tree.right);
}


function validateBst(tree) {
  // Write your code here.
  return  validateBsthelper(tree);
}

function validateBsthelper(tree, min = -Infinity, max = Infinity) {
  // Write your code here.
  if(tree === null) {
    return true;
  }
  if(tree.value < min || tree.value >= max) return false;
  return validateBsthelper(tree.left, min, tree.value) && validateBsthelper(tree.right, tree.value, max)
}


function inOrderTraverse(tree, array) {
  // Write your code here.
  if(tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value)
    inOrderTraverse(tree.right, array)
  }

  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  if(tree !== null) {
    array.push(tree.value)
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array)
  }

  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  if(tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array)
    array.push(tree.value)
  }

  return array;
}

const root = new BST(10);

root.left = new BST(2);
root.left.left = new BST(4);
root.left.right = new BST(5);
root.right = new BST(12);

console.log('*****************VALIDATE TREE:', validateBst(root));

console.log('*****************POSTORDER Postorder (Left, Right, Root) : 4 5 2 3 1');
postOrder(root)
console.log('*****************INORDER Inorder (Left, Root, Right) : 4 2 5 1 3');
inOrder(root);
console.log('*****************PREORDER (Root, Left, Right) : 1 2 4 5 3 ');
preorder(root);
