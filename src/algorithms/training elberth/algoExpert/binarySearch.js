function binarySearch(array, target) {
  let lowest = 0;
  let highest = array.length;
  let i = 0;
  while (i < highest - 1) {
    const middle = Math.floor((lowest + highest) / 2);
    if (array[middle] === target) {
      return middle;
    }
    if (array[middle] > target) {
      highest = middle - 1; // es menos uno porque la mitad ya se comparo
    } else {
      lowest = middle + 1; // es mas uno porque la mitad ya se comparo
    }
    i += 1;
  }
  return -1;
}

function binarySearchRecursive(arr, tar) {
  const helper = (array, target, left, right) => {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialMAtch = array[middle];
    if (target === potentialMAtch) {
      return middle;
    } if (target < potentialMAtch) {
      return helper(array, target, left, middle - 1);
    }
    return helper(array, target, middle + 1, right);
  };
  return helper(arr, tar, 0, arr.length - 1);
}

function binarySearchBetter(arr, tar) {
  const helper = (array, target, left, right) => {
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const matcher = array[middle];
      if (target === matcher) {
        return middle;
      } if (target < matcher) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
  };
  return helper(arr, tar, 0, arr.length - 1);
}

const arr = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const tar = 33;
console.log(binarySearch(arr, tar) === binarySearchRecursive(arr, tar));

console.log(binarySearch(arr, tar) === binarySearchBetter(arr, tar));
