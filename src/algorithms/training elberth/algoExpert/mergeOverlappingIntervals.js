function mergeOverlappingIntervals(intervals) {
  // Write your code here.
  const result = [];
  if(intervals.length ===0) return [[]];
  const arr = intervals.sort((a, b) => a[0] - b[0])

  result.push(arr[0])
  let overlapping = arr[0][1];
  let resultPosition = 0;
  for(let i = 1; i < arr.length; i++){
    const [a, b] = arr[i]
    if(overlapping >= a){
      if(overlapping > b) continue;
      result[resultPosition] = [result[resultPosition][0], b]
      overlapping = overlapping > result[resultPosition][1] ? overlapping : result[resultPosition][1]
      continue;
    }
    result.push(arr[i])
    resultPosition++;
    overlapping = result[resultPosition][1]
  }
  return result;
}

const intervals = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10]
]


const expected = [
  [1, 10]
]
const actual = mergeOverlappingIntervals(intervals);

console.log(expected === actual);

/*
const intervals = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];
const expected = [
  [1, 2],
  [3, 8],
  [9, 10],
];*/
