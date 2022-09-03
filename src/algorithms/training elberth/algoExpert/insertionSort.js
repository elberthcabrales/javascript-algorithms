function insertionSort(array) {
  // Write your code here.
  const n = array.length;
  let i; let key; let
    j;
  for (i = 1; i < n; i++) {
    key = array[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are
    greater than key, to one position ahead
    of their current position */
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = key;
  }
  return array;
}

const arr = [8, 5, 2, 9, 5, 6, 3];
//
console.log(insertionSort(arr));
