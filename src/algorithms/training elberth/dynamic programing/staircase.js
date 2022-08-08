/**
 * Nick is standing next to a staircase that leads to his apartment.
 * The staircase has n total steps; Nick knows he can climb anywhere between 1 and m steps in one jump.
 * He thinks about how many ways there are to climb this staircase.
 * He realizes it is a big number since there are a lot of possible combinations.
 * So, he has asked you to write an algorithm for him
 * that tells him the number of possible ways to climb a staircase given n (number of steps) and, m (number of steps covered in biggest jump).
 *
 * input n = 4 and m = 2
 * expected staircase(n, m) = 5
 * */
const memo = {}


function staircase(n, m) {
  console.log(`${n} `)
  if(n == 0){ //# base case of when there is no stair
    return 1;
  }
  let ways = 0;
  if(memo[n]) return memo[n]
  for(let i = 1; i <= m; i++){
    // if steps remaining is smaller than the jump step, skip
    if(i <= n){
      ways += staircase(n - i, m) //recursive call with n i units lesser where i is the number of steps taken here
    }
  }
  memo[n] = ways
  return ways
}

const n = 4; // steps target
const m = 2; // max steps in jump

console.log(staircase(n, m))
