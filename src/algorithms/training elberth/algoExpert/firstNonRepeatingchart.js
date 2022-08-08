function firstNonRepeatingCharacter(string) {
  // Write your code here.
  const records = {}
  const indexs = {}
  const size = string.length;
  for(let i = 0; i < size; i++) {
    const letter = string[i];
    if(records[letter]){
      records[letter] += 1
    } else {
      records[letter] = 1;
      indexs[letter] = i;
    }
  }
  let i = 0
  for(let c in records) {
    if(records[c] === 1) return indexs[c];
    i++
  }
  return -1;
}




const input = 'faadabcbbebdf';
const expected = 6;
console.log(expected === firstNonRepeatingCharacter(input))
