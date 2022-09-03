function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}


function mergeSort(arr) {
  // Base case
  if (arr.length === 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  const result = merge(left, right)

  return result
}

function findSecondMaximum(arr){
  if(arr.length == 1) return arr;

  const result = mergeSort(arr);
  console.log(result)
  return result[result.length - 2];
}


const arr = [9,2,3,6];
//console.log(findSecondMaximum(arr)) // 6


console.log(findSecondMaximum( [4,2,1,5,0])) //4
