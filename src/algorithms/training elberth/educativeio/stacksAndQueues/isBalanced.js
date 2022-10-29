const {Stack} = require('./Stack.js');

function isBalancedOther(exp) {
  const myStack = new Stack();
  //Iterate through the string exp
  for (let i = 0; i < exp.length; i++) {
    //For every closing parenthesis check for its opening parenthesis in stack
    if (exp[i] == '}' || exp[i] == ')' || exp[i] == ']') {
      if (myStack.isEmpty()) {
        return false
      }
      let output = myStack.pop();
      //If you can't find the opening parentheses for any closing one then returns false.
      if (((exp[i] == "}") && (output != "{")) || ((exp[i] == ")") && (output != "(")) || ((exp[i] == "]") && (output != "["))) {
        return false;
      }
    } else {
      //For each opening parentheses, push it into stack
      myStack.push(exp[i]);
    }
  }
  //after complete traversal of string exp, if there's any opening parentheses left
  //in stack then also return false.
  if (myStack.isEmpty() == false) {
    return false
  }
  //At the end return true if you haven't encountered any of the above false conditions.
  return true
}

const isBalanced = (str) => {
  const stack = [] // use shift for last in first out (LIFO)
  const closedCharters = { '>': '<', ']': '[', ')': '(', '}': '{' };

  for(let i = 0; i < str.length; i++){
    const char = closedCharters[str[i]];
    if(char){
      if(char != stack.pop()) return false
    }else{
      stack.push(str[i])
    }
  }

  if(stack.length > 0) return false;
  return true
}


let inputString = "{[()]}"
console.log(isBalanced(inputString)) // true

inputString = "<>[]"
console.log(isBalanced(inputString)) // true

inputString = "<>[]]" // false
console.log(isBalanced(inputString))

inputString = "{[([({))]}}" // false
console.log(isBalanced(inputString))

inputString = "({}{}{})[]" // true
console.log(isBalanced(inputString))

inputString = "({}{}{}){}]" // false
console.log(isBalanced(inputString))
