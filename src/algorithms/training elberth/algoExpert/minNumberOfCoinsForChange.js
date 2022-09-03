function minNumberOfCoinsForChange(n, denoms) {
  if (n === 0) return 0;
  const dp = new Array(n + 1).fill(Infinity);

  dp[0] = 0; // start in base case 0
  for (const coin of denoms) { // traversing all coins one by one
    for (let index = 1; index <= n; index++) { // comparing from 1 to n
      if (coin <= index) { // coin have to be less than index
        dp[index] = Math.min(dp[index], dp[index - coin] + 1); // replace position  in array
      }
    }
  }

  if (dp[n] === Infinity) {
    return -1;
  }
  return dp[n];
}

// expected 3 for minNumberOfCoinsForChange(7, [1, 5, 10])
console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));
