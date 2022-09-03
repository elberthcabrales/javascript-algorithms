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
