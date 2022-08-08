function runLengthEncoding(string) {
  // Write your code here.
  const encodedStringCharacters = [];
  let currentRunLength = 1;

  for(let i = 1; i < string.length; i++){
    const currentCharacter = string[i];
    const previousCharacter = string[i - 1];
    if(currentCharacter !== previousCharacter || currentRunLength === 9){
      encodedStringCharacters.push(currentRunLength.toString())
      encodedStringCharacters.push(previousCharacter)
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  encodedStringCharacters.push(currentRunLength.toString())
  encodedStringCharacters.push(string[string.length - 1])

  return encodedStringCharacters.join('')
}

const string = "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA";
const result = runLengthEncoding(string)
console.log(("9*3*7^6$7%6!9A9A2A" === result))
