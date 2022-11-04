function levenshteinAux(a, b, idxA, idxB, memo) {
  if (idxA === a.length) { // base case of reaching the end of str1
    return b.length - idxB;
  }

  if (idxB === b.length) { // base case of reaching the end of str2
    return a.length - idxA;
  }

  if (memo[`${idxA}-${idxB}`]) {
    return memo[`${idxA}-${idxB}`];
  }
  if (a[idxA] === b[idxB]) { // if the characters match, we move ahead
    memo[`${idxA}-${idxB}`] = levenshteinAux(a, b, idxA + 1, idxB + 1, memo);
    return memo[`${idxA}-${idxB}`];
  }

  const response = 1 + Math.min(
    levenshteinAux(a, b, idxA + 1, idxB + 1, memo), // Change characters
    levenshteinAux(a, b, idxA, idxB + 1, memo), // Insertion in str1 (or skip 1 character in str1)
    levenshteinAux(a, b, idxA + 1, idxB, memo), // Deletion in str1 (or skip 1 character in str2)
  );

  memo[`${idxA}-${idxB}`] = response;

  return response;
}

function levenshteinRecursive(a, b) {
  const memo = {};
  return levenshteinAux(a, b, 0, 0, memo);
}

// bottom up
function levenshtein(a, b) {
  const sizeA = a.length;
  const sizeB = b.length;

  //create matrix axb
  const dp = new Array(sizeA + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(sizeB + 1).fill(0);
    dp[i][0] = i;
  }
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // substitution without cost
      }
      else{

        dp[i][j] = 1 + Math.min(
          dp[i][j - 1], // insertion
          dp[i - 1][j],  // deletion
          dp[i - 1][j - 1], // substitution
        );
      }
    }
  }
  console.log(dp);
  return dp[sizeA][sizeB];
}

const response = levenshtein('kitten', 'sitting');
console.log(JSON.stringify(response));
