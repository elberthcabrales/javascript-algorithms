function sortedSquaredArray(array) {
  // Write your code here.
  const sortedSquares = new Array(array.length).fill(0)
  let smallerValueIdx = 0;
  let largerValueIdx = array.length  - 1;

  for(let idx = array.length - 1; idx >= 0; idx--){
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if(Math.abs(smallerValue) > Math.abs(largerValue)){
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}

function sortedSquaredArray(array) {
  const result = new Array(array.length).fill(0)
  let i = 0;
  let j = array.length - 1;
  let position = array.length - 1;
  while(i <= j){
    if(Math.abs(array[j]) > Math.abs(array[i])){
      result[position] = array[j] * array[j]
      j--
    }else{
      result[position] =  array[i] * array[i]
      i++
    }
    position--;
  }
  return result;
}
const input = [-3, -2, -1, 9];
const expected = [1, 4, 9, 81];
const actual = sortedSquaredArray(input);

input.forEach((_, i) => {
  console.log(expected[i] === actual[i])
})

