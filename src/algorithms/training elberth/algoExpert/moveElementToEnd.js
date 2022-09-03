function moveElementToEnd(array, toMove) {
  // Write your code here.
  let size = array.length;
  let j = size - 1;
  for (let i = 0; i < size; i++) {
    if (array[i] === toMove) {
      if (array[i] === array[j]) {
        j--;
        i--;
        size--;
      } else {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        size--;
        j--;
      }
    }
  }
  return array;
}

// Do not edit the line below.
const expected = [4, 1, 3, 2, 2, 2, 2, 2];
const arr = [2, 1, 2, 2, 2, 3, 4, 2];
const result = moveElementToEnd(arr, 2);
console.log(result, expected);
