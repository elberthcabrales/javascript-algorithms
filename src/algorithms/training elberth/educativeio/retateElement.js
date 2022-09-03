function rearrange(arr) {
  const positive = []
  const negatives = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      negatives.push(arr[i])
    }else {
      positive.push(arr[i])
    }
  }

  return [ ...negatives, ...positive]
}

const arr = [10,-1,20,4,5,-9,-6]

console.log(rearrange(arr)) // [-1,-9,-6,10,20,4,5]

