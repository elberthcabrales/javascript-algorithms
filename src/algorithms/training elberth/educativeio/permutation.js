function permutations(str) {
  const arr = str.split('');
  const permutes = [];
  permutationsAux(arr, permutes);
  permutes;
}
function permutationsAux(arr, permutes) {
  if (arr === '') return [''];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const result = permutationsAux(permutes.slice(i, arr.length - 1), permutes);
  }
  return permutes;
}

console.log(permutations('abc'));
