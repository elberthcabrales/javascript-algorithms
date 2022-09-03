const findClosestValueInBst = (tree, target) => {
  const stack = [];
  const diff = {};
  let current = tree;
  while (true) {
    if (current != null) {
      stack.push(current);
      current = current.left;
    } else {
      if (stack.length !== 0) {
        current = stack.pop(); // last in first out(lifo) last node of branch out
        diff[Math.abs(current.value - target)] = current.value;
        current = current.right;
      } else {
        break;
      }
    }
  }
  const key = Math.min(...Object.keys(diff));

  return diff[key];
};

const findClosestValueInBstAlgoExpert = (tree, target) => {
  // eslint-disable-next-line no-use-before-define
  return findClosestValue(tree, target, tree.value);
};

function findClosestValue(node, target, closest) {
  if (node === null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - node.value)) {
    // eslint-disable-next-line no-param-reassign
    closest = node.value;
  }
  if (target < node.value) {
    return findClosestValue(node.left, target, closest);
  } if (target > node.value) {
    return findClosestValue(node.right, target, closest);
  }
  return closest;
}

module.exports = {
  findClosestValueInBst,
  findClosestValueInBstAlgoExpert,
};
