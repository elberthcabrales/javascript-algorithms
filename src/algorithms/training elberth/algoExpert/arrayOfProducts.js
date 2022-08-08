function arrayOfProducts(array) {
  // Write your code here.
  const leftArr = new Array(array.length).fill(1);
  const rightArr = new Array(array.length).fill(1)
  const result = new Array(array.length).fill(1);

  let left = 1
  for(let i = 0; i < array.length; i++){
    leftArr[i] *= left;
    left *= array[i];
  }

  let right = 1;
  for(let i = array.length - 1; i >= 0; i--){
    rightArr[i] *= right;
    right *= array[i];
  }

  for(let i = 0; i < array.length; i++){
    result[i] = rightArr[i] * leftArr[i];
  }

  return result;

}
const array = [5, 3, 4, 2];
const expected = [24, 40, 30, 60];
const actual = arrayOfProducts(array);
