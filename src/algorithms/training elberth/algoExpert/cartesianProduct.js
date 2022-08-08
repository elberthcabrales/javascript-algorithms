export default function hourglassSum(arr) {
  const getHourglassSum = (rowOne, rowTow, rowThree) => {
    let sum = 0;
    sum += rowOne[0];
    sum += rowOne[1];
    sum += rowOne[2];
    sum += rowTow[1];
    sum += rowThree[0];
    sum += rowThree[1];
    sum += rowThree[2];
    return sum;
  };
  const getHourglassCalculated = new Array(16).fill(0);
  let indexIterator = 0;
  for (let i = 0; i < arr.length - 2; i += 1) {
    getHourglassCalculated[indexIterator] = getHourglassSum(
      arr[i].slice(0, arr.length), arr[i + 1].slice(0, arr.length), arr[i + 2].slice(0, arr.length),
    );
    indexIterator += 1;
    getHourglassCalculated[indexIterator] = getHourglassSum(
      arr[i].slice(1, arr.length), arr[i + 1].slice(1, arr.length), arr[i + 2].slice(1, arr.length),
    );
    indexIterator += 1;
    getHourglassCalculated[indexIterator] = getHourglassSum(
      arr[i].slice(2, arr.length), arr[i + 1].slice(2, arr.length), arr[i + 2].slice(2, arr.length),
    );
    indexIterator += 1;
    getHourglassCalculated[indexIterator] = getHourglassSum(
      arr[i].slice(3, arr.length), arr[i + 1].slice(3, arr.length), arr[i + 2].slice(3, arr.length),
    );
    indexIterator += 1;
  }

  return Math.max(...getHourglassCalculated);
}
