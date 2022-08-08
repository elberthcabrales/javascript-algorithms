let mergeIntervals = function(arr){
  let result = [];
  let start = arr[0][0];
  let end = arr[0][1]
  for(let i = 1; i < arr.length; i++){
    const a = arr[i][0]
    const b = arr[i][1]
    if(end > a){
      end = b
    } else {
      result.push([start,end])
      start = a
      end = b
      if(i === arr.length - 1){
        result.push([start,end])
      }
    }

  }
  return result;
}


const arr = [[1,3],[2,6],[8,10],[15,18]];
const expected = [[1,6],[8,10],[15,18]];

const result = expected === mergeIntervals(arr)

console.log(result)
