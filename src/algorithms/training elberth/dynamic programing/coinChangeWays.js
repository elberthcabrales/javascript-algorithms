function countWays(coins, total){
  const dp = Array(total+1).fill(0);
  // base case
  dp[0] = 1;

  for(let coinIdx = 0; coinIdx < coins.length; coinIdx++){
    const coin = coins[coinIdx];
    for(let amount = 1; amount <= total; amount++){
      if(coin <= amount){
        dp[amount] += dp[amount - coin]
      }
    }
    console.log(dp)
  }

  return dp[total]
}

const result = countWays([1,2,3], 4)
console.log(result===4)
