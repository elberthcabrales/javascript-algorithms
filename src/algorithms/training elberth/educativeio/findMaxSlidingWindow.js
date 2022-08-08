/**
 * Given an integer array and a window of size w,
 * find the current maximum value in the window as it slides through the entire array.
 *
 *  input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *  output [3, 4, 5, 6, 7, 8, 9, 10]
 */
let findMaxSlidingWindow = function(arr, windowSize) {
  var result = [];
  if (windowSize > arr.length || arr.length == 0) {
    return result;
  }

  for(let i = 0; i <= arr.length - windowSize; i++){
    let before = arr[i]
    for(let j =  i; j < windowSize + i; j++){
      before = Math.max(before, arr[j])
    }
    result.push(before)
  }

  return result;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const window_size = 3
findMaxSlidingWindow(nums, window_size)
