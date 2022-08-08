function minHeightBst(array) {
  // Write your code here.
  return helperMinHeightBst(array, null, 0, array.length - 1);
}

function helperMinHeightBst(array, bst, startIdx, endIdx){
  if(endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx)/2)
  const valueToAdd = array[midIdx];
  if(bst === null){
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  helperMinHeightBst(array, bst, startIdx, midIdx - 1);
  helperMinHeightBst(array, bst, midIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

const assert = require('assert');
const bst = [
  {"id": "10", "left": "2", "right": "14", "value": 10},
  {"id": "14", "left": "13", "right": "15", "value": 14},
  {"id": "15", "left": null, "right": "22", "value": 15},
  {"id": "22", "left": null, "right": null, "value": 22},
  {"id": "13", "left": null, "right": null, "value": 13},
  {"id": "2", "left": "1", "right": "5", "value": 2},
  {"id": "5", "left": null, "right": "7", "value": 5},
  {"id": "7", "left": null, "right": null, "value": 7},
  {"id": "1", "left": null, "right": null, "value": 1}
];

const root = [1, 2, 5, 7, 10, 13, 14, 15, 22];
assert(minHeightBst(root))
