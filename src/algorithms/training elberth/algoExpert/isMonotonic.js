function isMonotonic(array) {
  // Write your code here.
  const size = array.length;
  if (size <= 1) return true;
  let ascending = true;
  let isPositive = true;
  for (let i = 0; i < size - 1; i++) {
    const first = array[i];
    const next = array[i + 1];
    if (i === 0) {
      isPositive = first > 0;
      if (isPositive && first > next) {
        ascending = true;
      } else {
        if (!isPositive && first > next) {
          ascending = false;
        }
        if (!isPositive && first < next) {
          ascending = true;
        }
      }
    }

    if (ascending && isPositive && first < next && first !== next) return false;
    if (!ascending && isPositive && first > next && first !== next) return false;
    if (!ascending && !isPositive && first > next && first !== next) return false;
    if (ascending && !isPositive && first < next && first !== next) return false;
  }
  return true;
}

const array = [-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11];
const expected = true;
const actual = isMonotonic(array);
console.log(expected === actual);
