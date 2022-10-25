const {Stack} = require('./Stack.js');

function evaluatePostfix(exp) {
  const myStack = new Stack();
  let op1, op2;
  // 1.Scan expression character by character,
  for (let i = 0; i < exp.length; i++) {
    if (!isNaN(parseInt(exp[i], 10))) {
      //2.If character is a number push it in stack
      //parseInt parses a string and returns an integer
      myStack.push(parseInt(exp[i], 10));
    } else {
      /**
       3.If character is operator then pop two elements from stack
       perform the operation and put the result back in stack
       At the end, Stack will contain result of whole expression.
       */
      console.log(myStack)
      op1 = myStack.pop();
      op2 = myStack.pop();
      console.log(`exp[i]: ${exp[i]} \n ${op1}  ${exp[i]}  ${op2}`)
      if (exp[i] == '+') {
        myStack.push(op1 + op2);
      } else if (exp[i] == '-') {
        myStack.push(op2 - op1);
      } else if (exp[i] == '*') {
        myStack.push(op1 * op2);
      } else if (exp[i] == '/') {
        myStack.push(op2 / op1);
      }
    }
  }

  return myStack.pop();

}

console.log("Result: " + evaluatePostfix("921*-8-4+")) // 9 - 2 * 1 - 8 + 4 = 3
