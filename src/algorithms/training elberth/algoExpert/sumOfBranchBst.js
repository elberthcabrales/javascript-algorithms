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
