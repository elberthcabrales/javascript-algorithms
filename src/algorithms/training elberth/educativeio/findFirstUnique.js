/**
 * Given a list, find the first integer which is unique in the list.
 * Unique means the number does not repeat and appears only once in the whole list.
 * Implement your solution in Python and see if it runs correctly!
 * @param arr
 */
function findFirstUnique(arr) {
  if(arr.length === 1) return arr;
  const hash = {}
  hash[arr[0]] = 0;

  for(let i = 1; i < arr.length; i++){
    if(hash[arr[i]]){
      hash[arr[i]] = Infinity
    }else {
      hash[arr[i]] = i
    }
  }

  const result = Object.values(hash)

  let min = result[0]

  for(let i = 1; i < result.length; i++){
    min = Math.min(min, result[i])
  }

  return  arr[min]
}

const arr = [9,2,3,2,6,6];
console.log(findFirstUnique(arr))


const arr2 = [4,5,1,2,0,4];
console.log(findFirstUnique(arr2))

