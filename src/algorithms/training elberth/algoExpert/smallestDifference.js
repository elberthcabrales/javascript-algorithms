function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let smallest = Infinity;
  let current  = Infinity
  let result = [];
  let indexOne = 0;
  let indexTow = 0;
  while (arrayOne.length > indexOne && arrayTwo.length > indexTow) {
    const one = arrayOne[indexOne];
    const tow = arrayTwo[indexTow];

    if(one < tow) {
      current = Math.abs(tow -  one)
      indexOne++;
    } else if (one > tow) {
      indexTow++
      current = Math.abs(one - tow)
    } else {
      return [one, tow];
    }
    if(current < smallest) {
      result = [one, tow]
      smallest = current;
    }
  }

  return result;
}

// Do not edit the line below.
const expected = [28, 26];
const result = smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
console.log(expected === result);
