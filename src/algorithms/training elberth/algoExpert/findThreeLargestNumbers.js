function findThreeLargestNumbers(array) {
  // Write your code here.
  return array.sort((a, b) => a - b).slice(0, 3);
}

const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

const result = findThreeLargestNumbers(arr);

console.log(result === [18, 141, 541]);
