function countChar(str, char) {
  if (str.length <= 0) {
    return 0;
  }
  if (str[0] === char) {
    return 1 + countChar(str.slice(1), char);
  }
  return countChar(str.slice(1), char);
}

console.log(countChar('abacada', 'a') === 4);
