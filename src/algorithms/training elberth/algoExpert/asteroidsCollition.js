/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const result = []
  for(let i = 0; i < asteroids.length; i++){
    while (asteroids[i] < 0 && result[result.length - 1] > 0){
      if(Math.abs(result[result.length - 1]) < Math.abs(asteroids[i])){
        result.pop();
      } else if(Math.abs(result[result.length - 1]) > Math.abs(asteroids[i])){
        asteroids[i] = null;
      } else if(Math.abs(result[result.length - 1]) == Math.abs(asteroids[i])) {
        result.pop();
        asteroids[i] = null;
        break
      } else {
        break;
      }
    }
    if(asteroids[i] != null) {
      result.push(asteroids[i])
    }
  }
  return result
};


/**
 * Input: asteroids = [10,2,-5]
 * Output: [10]
 */
const result = asteroidCollision([10,2,-5])
console.log(result);
