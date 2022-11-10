function spiralTraverse(array) {
  // Write your code here.
  const result = [];

  let ni = 0;
  let nj = array.length - 1;

  // nxm
  let mi = 0;
  let mj = array[0].length - 1;

  while (ni <= nj && mi <= mj) {
    // right
    for (let i = mi; i <= mj; i++) {
      result.push(array[ni][i]);
    }
    // down
    for (let i = ni + 1; i <= nj; i++) {
      result.push(array[i][mj]);
    }

    // left
    for (let i = mj - 1; i >= mi; i--) {
      if (ni === nj) break;
      result.push(array[nj][i]);
    }

    // up
    for (let i = nj - 1; i > ni; i--) {
      if (mi === mj) break;
      result.push(array[i][mi]);
    }
    ni++;
    nj--;
    mi++;
    mj--;
  }
  return result;
  //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
}
const matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
spiralTraverse(matrix);
