const permutations = (array) => {
  // Base case, return single-element array wrapped in another array
  if (array.length === 1) {
    return [array];
  }

  const perms = [];

  for (let i = 0; i < array.length; i++) {
    // Make a fresh copy of the passed array and remove the current element from it
    const rest = array.slice();
    rest.splice(i, 1);

    const permRecursiveResult = permutations(rest);

    // Add the current element to the beginning of each sub-array and add the new
    // permutation to the output array
    for (let j = 0; j < permRecursiveResult.length; j++) {
      perms.push([array[i], ...permRecursiveResult[j]]);
    }
  }
  return perms;
};

const input = ['a', 'b', 'c', 'd'];

let result = permutations(input);

function myPermutation(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    const rest = input.slice()
    rest.splice(i, 1);
    let subArr = [current]
    for (let j = 0; j < rest.length; j++) {
      subArr.push(rest[j])
    }
    result.push(subArr);
    subArr = [current]
    for (let j = rest.length - 1; j >= 0 ; j--) {
      subArr.push(rest[j])
    }
    result.push(subArr);
  }

  return result
}

result = myPermutation(input);

console.log(result);
