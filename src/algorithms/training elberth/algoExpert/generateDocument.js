function generateDocument(characters, document){
  // Write your code here.
  const size = characters.length > document.length ? characters.length : document.length;
  if(document.trim().length === 0) return true
  const c = {};
  const d = {};
  const accumulate = (hash, char) => {
    if(char === undefined) return;
    if(char === " ") char = "space"
    if(hash[char]){
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  for (let i = 0; i < size; i++){
    accumulate(c, characters[i])
    accumulate(d, document[i])
  }
  //evaluar si con characters se puede formar document
  for(const e in c) {
    const charterFrequency = c[e]
    const documentFrequency = d[e]
    if(!charterFrequency) return false;
    if(documentFrequency > charterFrequency) {
      return false;
    } else {
      d[e] -= c[e]
    }
  }

  for(const e in d) {
    const documentFrequency = d[e]
    if(documentFrequency > 0) {
      return false;
    }
  }

  return true;
}
const characters = "helloworld "//'Bste!hetsi ogEAxpelrt x ';
const document = "hello wOrld"//'AlgoExpert is the Best!';
console.log(generateDocument(characters, document))
