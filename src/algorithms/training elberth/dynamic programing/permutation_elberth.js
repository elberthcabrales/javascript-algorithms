const permutations = array => {
  // Base case, return single-element array wrapped in another array
  if(array.length === 1){
    return [array]
  }

  let perms = []

  for(let i = 0; i < array.length; i++){
    // Make a fresh copy of the passed array and remove the current element from it
    let rest = array.slice()
    rest.splice(i, 1)

    let permRecursiveResult = permutations(rest);

    // Add the current element to the beginning of each sub-array and add the new
    // permutation to the output array
    for(let j = 0; j < permRecursiveResult.length; j++){
      perms.push([array[i], ...permRecursiveResult[j]])
    }

  }
  return perms;
};

const input = ['a','b', 'c']

const result = permutations(input);
console.log(result)
