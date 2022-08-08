function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  const size = redShirtSpeeds.length;
  redShirtSpeeds.sort((a, b) => (a - b));
  blueShirtSpeeds.sort((a, b) => (a - b));
  let backward = size - 1;
  let sum = 0;
  const evaluation = (isFastest, red, blue) => {
    return isFastest ? Math.max(red, blue) : Math.min(red, blue)
  }
  for(let forward = 0; forward < size; forward++) {
    if(fastest){
      sum +=  evaluation(fastest, redShirtSpeeds[forward], blueShirtSpeeds[backward]);
    } else {
      sum +=  evaluation(fastest, redShirtSpeeds[forward], blueShirtSpeeds[forward]);
    }
    backward--;
  }
  return sum;
}

tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false)
