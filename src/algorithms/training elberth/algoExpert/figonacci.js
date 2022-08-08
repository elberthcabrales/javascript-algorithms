/** https://es.numberempire.com/fibonaccinumbers.php
 *  F 0 = 1
 *  F 1 = 1
 *  F n = F n – 2 + F n – 1 donde n ≥ 2.
 */
function fib(n){
  if(n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

function fibIterative(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n]
}


function getNthFib(n) {
  // Write your code here.
  const result = [0, 1]
  for(let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2])
  }
  return result[n - 1]
}
const result = getNthFib(6);

console.log(result)
