function bubbleSort(array) {
  // Write your code here.
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[i] < array[j]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

const arr = [2, 3, 5, 5, 6, 8, 9];

bubbleSort(arr);
