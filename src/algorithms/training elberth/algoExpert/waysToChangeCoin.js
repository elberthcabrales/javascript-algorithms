// Write your code here.
function numberOfWaysToMakeChange(target, coins) {
  const ways = new Array(target + 1).fill(0);
  ways[0] = 1;
  for (const coin of coins) {
    for (let amount = 1; amount <= target; amount++) {
      if (coin <= amount) {
        ways[amount] += ways[amount - coin];
      }
    }
  }
  console.log(ways);
  return ways[target];
}


// 1x1 + 5x1 and 6x1 are 2 ways
numberOfWaysToMakeChange(6, [1, 5]);
