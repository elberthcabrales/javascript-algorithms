function mergeOverlappingIntervals(intervals) {
  // Write your code here.
  const result = [];
  if(intervals.length ===0) return [[]];
  intervals.sort((a, b) => a[0] - b[0])
  //case 1
  // cuando uno de ellos es abarca todos los demas es menor que todos y mayor que los demas en su ultimo
  let [prevFirst, prevSecond] = intervals[0]
  const [lastFirst, lastSecond] = intervals[intervals.length - 1]
  if(prevFirst < lastFirst && prevSecond > lastSecond) {
    result.push([prevFirst, prevSecond])
    return result
  }

  for(let i = 1; i < intervals.length; i++){
    const [currentFirst, currentSecond] = intervals[i];
    if(prevSecond >= currentFirst && currentFirst >= prevFirst){
      prevSecond = currentSecond
    }
    if(prevSecond < currentFirst){
      result.push([prevFirst, prevSecond])
      prevFirst = currentFirst
      prevSecond = currentSecond
    }
  }
  result.push([prevFirst, prevSecond])

  return result;
}

console.log(mergeOverlappingIntervals( [  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 1]]))
