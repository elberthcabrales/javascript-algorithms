

function maxSubsetSumNoAdjacent(array) {
  if(!array.length) return 0
  if(array.length === 1) return array[0]
  const maxSum = array.slice()
  maxSum[1] = Math.max(array[0], array[1])
  for(let i = 2; i < array.length; i++){
    maxSum[i] = Math.max(array[i - 1], array[i - 2] + array[i])
  }
  console.log(maxSum)
  return maxSum[maxSum.length - 1]
}

const result = maxSubsetSumNoAdjacent([30, 25, 50, 55, 100, 120]) // expected 205

console.log(result)
