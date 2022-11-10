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
        // recursive insert to get the leaf
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

  /**
   * insert value
   *  if value is less than root and left is null, invoke recursive insert
   *  if value is bigger than root and right is null, invoke recursive insert
   *  two cases insert in left or right
   *  then return this
   *
   *  remove value
   * case 1 :
   *  evaluate value if is smaller than first left use left child recursion invoke remove
   * case 2:
   *  evaluate value if is bigger than first right use child recursion invoke remove
   * case 3:
   *  value is equal
   *  if it has parent validate if is equal left or right
   *     assign to left or right... left or right value
   *  else no has parent
   *     add next value and next right or left depending on exist left or right
   *
   *  contain value
   *    if is less than root search in left invoke recursive
   *      if less is null return false
   *    if is bigger than root search in right invoke recursive
   *      if right is null return false
   *
   *     then return true
   */

  contains(value) {
    // Write your code here.
    if (value < this.value) {
      if (this.left === null) {
        return false;
      }
      return this.left.contains(value);
    }
    if (value > this.value) {
      if (this.right === null) {
        return false;
      }
      return this.right.contains(value);
    }
    return true;
  }

  // here is the most important piece, track always the parent of node
  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this); // here remove is called from bst created in left
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else { // match
      // has two children
      if (this.left !== null && this.right !== null) { // case 1 Deleting a node with tow children
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else { // has 1 child
        if (parent) {
          if (parent.left === this) {
            parent.left = this.left ? this.left : this.right;
          } else {
            parent.right = this.left ? this.left : this.right;
          }
        } else {
          if (this.left !== null) {
            this.value = this.left.value;
            this.right = this.left.right;
            this.left = this.left.left;
          } else if (this.right !== null) {
            this.value = this.right.value;
            this.left = this.right.left;
            this.right = this.right.right;
          }
        }
      }
    }

    return this;
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    }
    return this.left.getMinValue();
  }
}
const assert = require('assert');

const root = new BST(10);

root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.right = new BST(20);
root.right.left = new BST(15);
root.right.left.right = new BST(17);
root.right.left.right.left = new BST(16); //replace
root.right.left.right.right = new BST(18);
root.right.right = new BST(22);

// 10,5,2,1,15,13,14,22,12
root.insert(12);
assert(root.right.left.left.value, 12);

root.remove(15);
assert(root.contains(10), false);
chai.expect(root.value).to.deep.equal(12);

chai.expect(root.contains(15)).to.deep.equal(true);
