import hourglassSum from '../cartesianProduct';
import nonContructibleChange from '../NonContructibleChange';
import { findClosestValueInBst, findClosestValueInBstAlgoExpert } from '../FindClosestValueInBst';

describe('hourglassSum', () => {
  it('should return null if there is not enough info for calculation', () => {
    const arr = [
      [-9, -9, -9, 1, 1, 1],
      [0, -9, 0, 4, 3, 2],
      [-9, -9, -9, 1, 2, 3],
      [0, 0, 8, 6, 6, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ];
    const result = hourglassSum(arr);
    expect(result).toEqual(28);
  });
});

describe('nonContructibleChange', () => {
  it('should return success', () => {
    const arr = [1, 5, 1, 1, 1, 10, 15, 20, 100];
    const result = nonContructibleChange(arr);
    expect(result).toEqual(55);
  });

  it('case 2', () => {
    const arr = [1, 1, 1, 1, 1];
    const result = nonContructibleChange(arr);
    expect(result).toEqual(6);
  });

  it('case 3', () => {
    const arr = [5, 7, 1, 1, 2, 3, 22];
    const result = nonContructibleChange(arr);
    expect(result).toEqual(20);
  });
});

describe('findClosestValueInBst', () => {
  /*            10
            /     \
           5      15
         /   \   /   \
        2     5 13   22
       /           \
      1            14
*/
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  // Tree for case 1
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);
  const expected = 13;

  it('should return success', () => {
    const actual = findClosestValueInBst(root, 12);
    expect(actual).to.deep.equal(expected);
  });

  it('should return success algoExpert solution', () => {
    const actual = findClosestValueInBstAlgoExpert(root, 12);
    expect(actual).to.deep.equal(expected);
  });
});
