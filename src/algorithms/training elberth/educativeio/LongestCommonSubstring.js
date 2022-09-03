function LongestCommonSubstring(strA, strB) {
  let longest = 0;
  const vertical = strA.length;
  const horizontal = strB.length;
  const dp = new Array(horizontal + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(vertical + 1).fill(0);
  }

  for (let i = 0; i < horizontal; i++) {
    const valStrB = strB[i];
    for (let j = 0; j < vertical; j++) {
      const valStrA = strA[j];
      if (valStrA === valStrB) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
        longest = Math.max(longest, dp[i + 1][j + 1]);
      }
    }
  }

  console.log(longest);
  return longest;
}

console.log(LongestCommonSubstring('hello elf', 'hello yourself') === 6);
