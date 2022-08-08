class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(1);
root.left = new BST(2);
root.left.right = new BST(5);
root.left.right.left = new BST(10);
root.left.left = new BST(4);
root.left.left.left = new BST(8);
root.left.left.right = new BST(9);
root.right = new BST(3);
root.right.left = new BST(6);
root.right.right = new BST(7);
/**          1
          /     \
         2       3
       /   \    /  \
      4     5  6    7
     / \   /
    8   9 10
*/
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7
// branch sum-------------------------------------
const sumBranch = (tree) => {
  const stack = [];
  let current = tree;
  const result = [];
  let indexResult = 0;
  while (true) {
    if (current != null) {
      stack.push(current);
      const { value } = current;
      current = current.left;
      if (current != null) current.value += value;
    } else {
      if (stack.length !== 0) {
        current = stack.pop(); // last in first out(lifo) last node of branch out
        console.log(current.value); // here is in order
        if (current.right != null) current.right.value += current.value;
        if (current.right === null && current.left === null) {
          result[indexResult] = current.value;
          indexResult += 1;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
  return result;
};

// solution 2
const inOrderSum = (tree) => {
  const arr = [];
  auxSumBranch(tree, arr);
  console.log(arr);
};

const auxSumBranch = (node, arr) => {
  if (node !== null) {
    if (node.left != null) node.left.value += node.value;
    auxSumBranch(node.left, arr);
    // Esta es la clave para ver que es el ultimo nodo cuando no tiene left ni right
    if (node.right === null && node.left === null) {
      arr.push(node.value);
    }
    if (node.right != null) node.right.value += node.value;
    auxSumBranch(node.right, arr);
  }
};
// branch sum-------------------------------------

// traverse ------------------------------------
const traverse = (tree) => {
  const stack = [];
  let current = tree;
  while (true) {
    if (current != null) {
      stack.push(current);
      current = current.left;
    } else {
      if (stack.length !== 0) {
        current = stack.pop(); // last in first out(lifo) last node of branch out
        console.log(current.value); // here is in order
        current = current.right;
      } else {
        break;
      }
    }
  }
};

const inOrder = (tree) => {
  if (tree !== null) {
    inOrder(tree.left);
    console.log(tree.value);
    inOrder(tree.right);
  }
};

const preOrder = (tree) => {
  if (tree !== null) {
    console.log(tree.value);
    preOrder(tree.left);
    preOrder(tree.right);
  }
};

const postOrder = (tree) => {
  if (tree !== null) {
    postOrder(tree.left);
    postOrder(tree.right);
    console.log(tree.value);
  }
};
// traverse ------------------------------------

// inOrderSum(root);
console.log('-------depth-------');

const rootDepth = new BST(1);
rootDepth.left = new BST(2);
rootDepth.left.left = new BST(4);
rootDepth.left.left.left = new BST(8);
rootDepth.left.left.right = new BST(9);
rootDepth.left.right = new BST(5);
rootDepth.right = new BST(3);
rootDepth.right.left = new BST(6);
rootDepth.right.right = new BST(7);

const nodeDepths = (tree) => {
  let sumOfDepths = 0;
  const stack = [{ node: tree, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node !== null) {
      sumOfDepths += depth;
      stack.push({ node: node.left, depth: depth + 1 });
      stack.push({ node: node.right, depth: depth + 1 });
    }
  }
  return sumOfDepths;
};

console.log(nodeDepths(rootDepth));
