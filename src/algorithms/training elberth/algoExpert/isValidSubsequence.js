function isValidSubsequence(array, sequence) {
  // Write your code here.
  let idxArr = 0;
  let idxSeq = 0;
  while(idxArr < array.length && idxSeq < sequence.length){
    if(array[idxArr] === sequence[idxSeq]){
      idxSeq++;
    }
    idxArr++
  }
  return idxSeq === sequence.length
}

const  { array: arr, sequence: seq } = {
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 10]
}

isValidSubsequence(arr, seq)
