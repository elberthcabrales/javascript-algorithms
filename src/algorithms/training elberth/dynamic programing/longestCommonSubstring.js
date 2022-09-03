function lcm(strFirst, strSecond){
  const dp = new Array(strFirst.length + 1).fill(0)

  for(let i = 0; i < dp.length; i++){
   dp[i] = new Array(strSecond.length + 1).fill(0)
  }

  let maxValue = 0;
  for(let i = 1;i <= strFirst.length; i++){
    for(let j = 1; j <= strSecond.length; j++){
      if(strFirst[i-1] === strSecond[j-1]){
         dp[i][j] = dp[i-1][j-1] + 1
        maxValue = Math.max(maxValue, dp[i][j])
      }
    }
  }

  return maxValue;

}

let result = lcm("bed", "raed")

console.log(result===2)
