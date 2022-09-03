export default function nonContructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let accum = 1;
  for (let i = 0; i < coins.length; i += 1) {
    if (coins[i] > accum) return accum;
    accum += coins[i];
  }

  return accum;
}
