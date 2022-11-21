function arrayOfProducts(array) {
  // Write your code here.
  const products = new Array(array.length).fill(1)
  let leftRunningProduct = 1;
  for(let i = 0; i < array.length; i++){
    products[i] = leftRunningProduct;
    leftRunningProduct *=array[i]
  }
  console.log(products)
  let rightRunningProduct = 1;
  for(let i = array.length - 1; i > -1; i--){
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i]
  }
  console.log(products)
  return products
}
const array = [5, 3, 4, 2];
const expected = [24, 40, 30, 60];
const actual = arrayOfProducts(array);

console.log(actual)
