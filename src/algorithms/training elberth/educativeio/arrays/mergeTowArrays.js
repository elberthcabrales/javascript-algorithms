const mergeTowArrays = (a, b) => {
  let iA = 0; //pivot
  let iB = 0;
  const result = new Array(a.length + b.length).fill(0)
  let position = 0;
  while (result.length > position){
    if(a[iA] <= b[iB]){
      result[position] = a[iA]
      iA++
    }else{
      result[position] = b[iB]
      iB++
    }

    position++;
  }
}

// TODO: merge tow arrs sorted
const a = [1,3,4,5]
const b = [2,6,7,8]

console.log(mergeTowArrays(a, b) === [1,2,3,4,5,6,7,8])

