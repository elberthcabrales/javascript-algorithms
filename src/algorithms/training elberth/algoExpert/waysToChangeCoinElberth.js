// Write your code here.
function numberOfWaysToMakeChange(target, coins) {
  if (coins.length <= 0) return 0;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let amount = 1; amount <= target; amount++) {
      if (coin <= amount) {
        dp[amount] = dp[amount] + dp[amount - coin]; // la diferencia del valor acumulado es el numero de monedas que sobran
        console.log(dp, amount, amount - coin,  dp[amount - coin]);
      }
    }
  }
  return dp[target];
}

// 1x1 + 5x1 and 6x1 are 2 ways
console.log(numberOfWaysToMakeChange(5, [1,2,5]));
