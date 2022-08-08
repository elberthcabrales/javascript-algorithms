// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  const result = sumOfProducts(array);
  console.log(result);
}

const sumOfProducts = (array, level = 1) => {
  let sum = 0;
  array.forEach((e) => {
    if(Array.isArray(e)){
      sum += sumOfProducts(e, level + 1)
    } else {
      sum += e;
    }
  })
  return sum * level;
}

const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

productSum(arr);
