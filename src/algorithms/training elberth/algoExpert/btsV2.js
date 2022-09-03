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

    return this;
  }

  contains(value) {
    // Write your code here.
    if (value < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(value);
    } if (value > this.value) {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(value);
    }
    return true;
  }

  remove(value, parent = null) {
    if (value > this.value) {
      this.right.remove(value, this);
    } else if (value < this.value) {
      this.left.remove(value, this);
    } else {
      // has two children
      if (this.left && this.right) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else {
        if (parent) {
          if (parent.left === this) {
            parent.left = this.left ? this.left : this.right;
          } else {
            parent.right = this.left ? this.left : this.right;
          }
        } else {
          if (this.left) {
            this.value = this.left.value;
            this.right = this.left.right;
            this.left = this.left.left;
          } else if (this.right) {
            this.value = this.right.value;
            this.right = this.right.right;
            this.left = this.right.left;
          }
        }
      }
    }

    return this;
  }

  getMinValue() {
    if (this.left) {
      return this.left.getMinValue();
    }
    return this.value;
  }
}
const assert = require('assert');

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
// 10,5,2,1,15,13,14,22,12
root.insert(12);
assert(root.contains(12), true);
root.remove(13);

assert(root.contains(13), false);
