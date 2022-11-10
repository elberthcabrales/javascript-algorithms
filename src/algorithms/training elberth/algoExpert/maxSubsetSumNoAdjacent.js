function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if(!array.length) return 0
  if(array.length === 1) return array[0]
  const maxSums = array.slice()
  // maxSums[0] is equal to array[0]
  maxSums[1] = Math.max(array[0], array[1])
  for(let i =2; i < array.length; i++){
    // si la suma de 2 atras más el actual es menor al anterior no tiene caso sumar para atras
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
  }

  return maxSums[maxSums.length - 1]
}

const result = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]); // expected 330

console.log(result);
