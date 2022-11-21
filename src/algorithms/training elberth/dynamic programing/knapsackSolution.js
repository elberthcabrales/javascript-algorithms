let solveKnapsack = function(profits, weights, capacity) {
  const dp = new Array(capacity).fill(0);
  const numberOfArticles = profits.length;

  //  base case, sum only one element without combinations
  for(let amount = 1; amount <= capacity; amount++){
    if(weights[0]<=amount){
      dp[amount-1] = profits[0]
    }
  }

  for(let idx = 1; idx < numberOfArticles; idx++){
    const valueArticle = profits[idx];
    const weightArticle = weights[idx];
    for(let c = 1; c <= capacity; c++){
      if(weightArticle <= c) {
        let profit = valueArticle;
        const diff = c - weightArticle;
        if(diff < weightArticle && diff > 0){
          profit += dp[c - weightArticle];
        }

        dp[c] = Math.max(profit, dp[c - 1])
      }
    }
    console.log(dp)
  }

  return dp[capacity]
};

const profits = [1, 6, 10, 16];
const weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`); // expected 22
