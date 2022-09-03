function rightRotate(arr, k){
  if(k === 0) return arr;
  let first = 0
  for(let i = k - 1; i < arr.length; i++){
    const temp = arr[i];
    arr[i] = arr[first];
    arr[first] = temp
    first++;
  }

  return arr
}

function rightRotate2(arr, k){
  return [...arr.slice(k-1), ...arr.slice(0,k-1)]
}
const lst = [10,20,30,40,50]
const k = 3

console.log(rightRotate2(lst, k)); // expected [ 30, 40, 50, 20, 10 ]
