const {Stack} = require('./Stack.js');

function nextGreaterElement(arr) {
  const myStack = new Stack();
  const result = [];
  let top, next;

  for (let i = arr.length - 1; i >= 0; i--) {
    next = arr[i]
    if (myStack.isEmpty() == false) {
      top = myStack.top;
      while (top <= next) {
        if (myStack.isEmpty()) {
          break;
        }
        myStack.pop();
        top = myStack.top;
      }
    }
    if(!myStack.isEmpty())
      result[i] = myStack.top;
    else
      result[i] = -1
    myStack.push(next);
  }

  for(let i=0;i<arr.length;i++){
    console.log(arr[i]+ " --> "+ result[i]);
  }
  return result;
}

const arr = [4, 6, 3, 2, 8, 1]
console.log(nextGreaterElement(arr)) // expected: [6, 8, 8, 8, -1, -1]
