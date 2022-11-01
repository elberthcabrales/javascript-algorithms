/**
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */
const climbStairs_ = function(n) {
  if(n === 1 || n === 0){
    return 1;
  }

  return climbStairs(n - 1) + climbStairs(n - 2)
};

const climbStairs = function(n) {
  const dp = new Array(n+1).fill(0);
  dp[0] = 1
  dp[1] = 1
  for(let i = 2; i < dp.length; i++){
    dp[i] = dp[i-1] + dp[i - 2]
  }
  return dp[n]
};
console.log(climbStairs(2))
console.log(climbStairs(3))
