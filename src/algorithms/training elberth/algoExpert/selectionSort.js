function selectionSort(array) {
  // Write your code here.
  const size = array.length;

  for (let i = 0; i < size; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < size; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      const tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
  return array;
}
const arr = [8, 5, 2, 9, 5, 6, 3];
//
console.log(selectionSort(arr));
