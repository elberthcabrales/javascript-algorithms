const fibonacci = (n) => {
  if(n === 0 || n === 1){
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}



const memo = {}
const fib = (n) => {
  if(n === 0 || n === 1){
    return n
  }
  const val = memo[n]
  if(val){
    return val
  }
  memo[n] = fib(n - 1) + fib(n - 2)
  return memo[n]
}

const toCalculate = 50
console.log(`memoization: ${fib(  toCalculate)} represent value ${toCalculate}`)
console.log(`normal: ${fibonacci(  toCalculate)} represent value ${toCalculate}`)

