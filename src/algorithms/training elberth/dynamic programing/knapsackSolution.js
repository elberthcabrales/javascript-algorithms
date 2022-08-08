function solveKnapsack(weights, prices, capacity, index){
  //base case of when we have run out of capacity or objects
  if(capacity <= 0 || index >= weights.length){
    return 0
  }
  //if weight at index-th position is greater than capacity, skip this object
  if(weights[index] > capacity){
    return solveKnapsack(weights, prices, capacity, index+1)
  }

  //recursive call, either we can include the index-th object or we cannot
  //we check both possibilities and return the most optimal one using max
  return Math.max( //this sum price because decrease capacity with current weights
    prices[index] + solveKnapsack(weights, prices, capacity - weights[index],index+1),
    solveKnapsack(weights,prices, capacity, index+1))
}

function knapsack(weights, prices, capacity){
  return solveKnapsack(weights, prices, capacity, 0)
}

const weights =  [2,1,1,3]
const prices = [2,8,1,10]
const capacity =  4
const expected = 18

const result = knapsack(weights, prices, capacity)

console.log(result)
