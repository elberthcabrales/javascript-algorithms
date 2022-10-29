// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const stack = [];
  let current = root;
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
}

function sumBranchRecursive(root){
  const arr = []
  auxSumBranch(root, arr);

  return arr
}
function auxSumBranch(node, arr){
  if(node != null){
    if(node.left != null){
      node.left.value += node.value
    }
    if(node.right != null){
      node.right.value += node.value
    }

    auxSumBranch(node.left, arr)
    auxSumBranch(node.right, arr)
    if(node.left === null && node.right === null){
      arr.push(node.value)
    }
  }
}

//test branchSums
const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right.left = new BinaryTree(10);
const expected = [15, 16, 18, 10, 11];
const actual = sumBranchRecursive(root);
console.log(JSON.stringify(expected) === JSON.stringify(actual));
