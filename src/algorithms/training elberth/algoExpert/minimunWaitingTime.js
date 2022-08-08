function minimumWaitingTime(queries) {
  // Write your code here.
  if (queries.length <= 1 || !queries) return 0;
  queries.sort((a, b) => a - b);
  // eslint-disable-next-line no-param-reassign
  queries = queries.slice(0, queries.length - 1);
  return queries.map((current, index, arr) => {
    return index === 0 ? current : current + arr.slice(0, index).reduce((a, b) => a + b);
  }).reduce((a, b) => a + b);
}

function minimumWaitingTime2(queries) {
  // Write your code here.
  queries.sort((a,b) => a - b);

  let result = 0;
  for(let idx = 0; idx < queries.length; idx++) {
    const duration = queries[idx];
    const queriesLeft = queries.length - (idx + 1);
    result += duration * queriesLeft;
  }
  return result
}
const arr = [3, 2, 1, 2, 6];
const result = minimumWaitingTime(arr);
const resultSolution2 = minimumWaitingTime2(arr);
console.log(result === resultSolution2);
