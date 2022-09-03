function removeNb(input) {
  // a * b = sum(n) - (a + b)

  let accum = 0;
  for (let i = 1; i >= input; i++) {
    accum += i;
  }

  return [];
}
const input = 26;
removeNb(input);
