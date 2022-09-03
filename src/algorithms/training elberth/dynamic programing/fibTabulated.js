function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  const arr = new Array(n + 1).fill(0);
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

// expected: 354224848179261915075
console.log(fib(10));
