function longestBalancedSubstring(string) {
  const hash = { ')': '(' }
  let stack = [] // use pop() for lifo
  let current = 0
  let smallest = 0

  for(let i = 0; i <string.length; i++) {
    const char = hash[string[i]]
    if(char){
      if(char !== stack.pop()){
        stack = []
        current = 0
      } else{
        current+=1;
        if(current > smallest){
          smallest = current
        }
      }
    }else{
      stack.push(string[i])
    }
  }

  return smallest
}
/**
 * )(()((()()(()()()(((
 *   ()((()()(()()()(((  2
 *     ((()()(()()()(((
 *       ()()(()()()(((  4
 *           (()()()(((
 *            ()()()(((  6
 *                  (((
 *                       6
 */

console.log(longestBalancedSubstring(')(()((()()(()()()(((')) // 6
console.log(longestBalancedSubstring('())()(()())')) //8
console.log(longestBalancedSubstring('(()))('))
//())()(()())
