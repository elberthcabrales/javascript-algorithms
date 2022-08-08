function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const newLetters = [];
  const newKey = key % 26;
  const letters = string.split('')
  const alphabet ="abcdefghijklmnopqrstuvwxyz".split('');
  for(let i=0; i < letters.length; i++){
    const letter = getNewLetter(letters[i], newKey, alphabet);
    newLetters.push(letter);
  }
  return newLetters.join('')
}

function getNewLetter(letter, key, alphabet) {
  const newLetterCode = alphabet.indexOf(letter) + key;
  return alphabet[newLetterCode % 26]; //residuo de dividir entre 26
}

// Do not edit the line below.
caesarCipherEncryptor('xyz', 5)
