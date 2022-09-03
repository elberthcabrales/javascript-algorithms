function binarySearch(arr, target) {
  if (!arr || arr.length === 0) return false;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    if (target === arr[mid]) {
      return true;
    } if (target > arr[mid]) {
      low = mid + 1;
    } else if (target < arr[mid]) {
      high = mid - 1;
    }
  }
}

const target = 100;
const arr = [1, 3, 8, 11, 88, 100];

console.log(binarySearch(arr, target));
/*
do until the pointers low and high meet each other.
    mid = (low + high)/2
    if (x == arr[mid])
        return mid
    else if (x > arr[mid]) // x is on the right side
        low = mid + 1
    else                       // x is on the left side
        high = mid - 1
 */
