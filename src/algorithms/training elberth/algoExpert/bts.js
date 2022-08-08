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
    if(value < this.value) {
      if(this.left === null){
        this.left = new BST(value);
      }else {
        // recursive insert to get the leaf
        this.left.insert(value)
      }
    } else{
      if(this.right === null) {
        this.right = new BST(value)
      }else {
        this.right.insert(value);
      }
    }
    return this;
  }


  contains(value) {
    // Write your code here.
    if(value < this.value){
      if(this.left === null){
        return false
      }else{
        return this.left.contains(value)
      }
    }else if (value > this.value){
      if(this.right === null){
        return false;
      }else{
        return this.right.contains(value)
      }
    } else {
      return true;
    }
  }

  /**
   *
   * @param value
   * @param parent
   * @returns {BST}
   * lookup with loop in binary search left or right
   * if value is found in BST.value
   *  if node has child left and child right
   *    replace node value with successor(the smallest item in the right subtree)
   *    remove replaced node
   *   //prioriza poner poner el node left si no pone el derecho
   *  else if value is left node && has parent
   *            parent.left = this.left !== null ? this.left : this.right;
   *  else if value is in rigth && has parent
   *            parent.right = this.left !== null ? this.left : this.right;
   *  else
   *   if (parent === null){
   *         if(this.left !== null) {
   *           // for skewed left
   *           this.value = this.left.value;
   *           this.right = this.left.right;
   *           this.left = this.left.left;
   *         }else if (this.right !== null){
   *           // for skewed right
   *           this.value = this.right.value; //replace parent with child
   *           this.left = this.right.left;
   *           this.right = this.right.right
   *     }
   *
   *
   *
   * return BST
   */
  //here is the most important piece, track always the parent of node
  remove(value, parent = null) {
    if(value < this.value){
      if(this.left !== null){
        this.left.remove(value, this) // here remove is called from bst created in left
      }
    } else if(value > this.value){
      if(this.right !== null){
        this.right.remove(value, this)
      }
    } else{ //match

      // has tow children
      if(this.left !== null && this.right !== null){// case 1 Deleting a node with tow children
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else { // has 1 child
        if (parent){
          if (parent.left === this){
            parent.left = this.left ? this.left : this.right;
          } else{
            parent.right = this.left ? this.left : this.right;
          }
        } else{
          if(this.left !== null) {
            this.value = this.left.value;
            this.right = this.left.right;
            this.left = this.left.left;
          }else if (this.right !== null){
            this.value = this.right.value;
            this.left = this.right.left;
            this.right = this.right.right
          }
        }
      }
    }

    return this;
  }

  getMinValue(){
    if(this.left === null){
      return this.value;
    }else{
      return this.left.getMinValue()
    }
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
root.right.left.right.left = new BST(14);
root.right.right = new BST(22);

// 10,5,2,1,15,13,14,22,12
root.insert(12);
assert(root.right.left.left.value,12);

root.remove(13);
assert(root.contains(10), false);
chai.expect(root.value).to.deep.equal(12);

chai.expect(root.contains(15)).to.deep.equal(true);
