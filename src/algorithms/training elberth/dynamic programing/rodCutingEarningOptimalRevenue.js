function rodCutting(n, prices, memo){
  if(n <= 0){
    return 0
  }
  if(memo[n]) {
    return memo[n]
  }
  let maxValue = 0;
  for(let i = 1; i <= n; i++){
    maxValue = Math.max(
      maxValue,
      prices[i-1]+rodCutting(n - i, prices, memo))
  }
  memo[n] = maxValue;
  return  memo[n]
}
const memo = {}
const result = rodCutting(4, [2,3,7,8], memo)
console.log(9 === result);

const solveRodCutting = function(lengths, prices, n) {
  // TODO: Write your code here
  const dp = Array(n+1).fill(0)

  for(let i=0; i < prices.length; i++){
    const price = prices[i]
    const length = lengths[i]

    for(let amountLen = 1; amountLen <= n; amountLen++){
      if(length <= amountLen){
        let value = price;
        const diff = amountLen - length;
        if(diff > 0){
          value += dp[diff]
        }
        dp[amountLen] = Math.max(dp[amountLen], value)
      }
    }
  }

  return dp[n];
};

const lengths = [1, 2, 3, 4, 5];
const prices = [2, 6, 7, 10, 13];
console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)} expected 14`);
