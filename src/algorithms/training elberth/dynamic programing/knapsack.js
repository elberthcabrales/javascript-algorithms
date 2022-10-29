const knapsackAux = (weights, prices, capacity, index, memo) => {
  // index out of scope
  console.log(`weight: ${weights[index]}, price: ${prices[index]}, capacity: ${capacity}, index: ${index} \n ${JSON.stringify(memo)}`);
  if (capacity === 0 || index >= weights.length) {
    return 0;
  }
  const key = `${capacity}-${index}`;
  // check for solution in memo table
  if (memo[key]) {
    return memo[`${capacity}-${index}`];
  }

  // when weights is bigger than capacity, use the next element in array
  if (weights[index] > capacity) {
    memo[key] = knapsackAux(weights, prices, capacity, index + 1, memo);
    return memo[`${capacity}-${index}`];
  }

  memo[key] = Math.max(
    prices[index] + knapsackAux(weights, prices, capacity - weights[index], index + 1, memo),
    knapsackAux(weights, prices, capacity, index + 1, memo),
  );

  return memo[`${capacity}-${index}`];
};

const knapsack = (weights, prices, capacity) => {
  const memo = {};
  return knapsackAux(weights, prices, capacity, 0, memo);
};

const weights = [2, 1, 1, 3];
const prices = [2, 8, 1, 10];
const capacity = 4;
const expected = 18;
const result = knapsack(weights, prices, capacity);
console.log(result);
