function maxSubsetSumNoAdjacent(array) {
  if(array.length===0) return 0
  if(array.length === 1) return array[1]
  const sums = array.slice()
  sums[1] = Math.max(array[0], array[1])

  for(let i = 2; i < array.length; i++){
    sums[i] = Math.max(sums[i-1], sums[i-2] + array[i])
  }
  console.log(sums)
  return sums[sums.length - 1]
}

const result = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]); // expected 330

console.log(result);
