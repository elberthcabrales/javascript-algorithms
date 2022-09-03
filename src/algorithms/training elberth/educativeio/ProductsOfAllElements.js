/**
 * Given a list, modify it so that each index stores the product of all elements in the list except the element at the index itself.
 * @param arr
 * complexity lineal O(n+m)
 */
function findProduct(arr){
  let accum = arr[0]
  for(let i = 1; i < arr.length; i++){
    accum *= arr[i];
  }
  for(let i = 0; i < arr.length; i++){
    arr[i] = accum / arr[i]
  }

  return arr;
}

const arr = [1,2,3,4]
//expected arr = [24,12,8,6]
console.log(findProduct(arr))
