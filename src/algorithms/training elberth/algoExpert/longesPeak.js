function longestPeak(array) {
  // Write your code here.
  let longestPeak = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
    if(!isPeak){
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }

    const currentLengthPeak = rightIdx - leftIdx - 1;
    longestPeak = Math.max(longestPeak, currentLengthPeak)

    i = rightIdx;
  }

  return longestPeak;
}

const arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
const result = longestPeak(arr);
const expected = 6;
console.log(result === expected)
