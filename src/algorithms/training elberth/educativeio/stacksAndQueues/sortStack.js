const {Stack} = require('./Stack.js');
function sortStack(stack) {
  if(!stack.isEmpty()){
    const value = stack.pop();
    sortStack(stack);
    insert(stack, value)
  }

  return stack;
}

function insert(stack, value){
  if(stack.isEmpty() || value < stack.top){
    stack.push(value)
  }else{
    //insert first value and then temp
    const temp = stack.pop();
    insert(stack, value)
    stack.push(temp)
  }
}

function sortInteractive(stack){
  const tempStack = new Stack();
  while (!stack.isEmpty()) {
    const value = stack.pop();
    if(tempStack.isEmpty() || value >= tempStack.top){
      tempStack.push(value);
    }else {
      console.log("while")
      while(!tempStack.isEmpty()){
        stack.push(tempStack.pop());
      }
      tempStack.push(value)
    }
    console.log(`stack: ${JSON.stringify(stack)} / tempStack: ${JSON.stringify(tempStack)} /value: ${value}`)
  }

  while(!tempStack.isEmpty()){
    stack.push(tempStack.pop())
  }

  return stack;
}


function sortStack2(stack) {
  let tempStack = new Stack();
  let value;
  while (stack.isEmpty() == false) {
    value = stack.pop();
    if (value >= tempStack.top) {
      tempStack.push(value)
    } else {
      while (tempStack.isEmpty() == false) {
        stack.push(tempStack.pop());
      }
      tempStack.push(value);
    }
  }

  while (tempStack.isEmpty() == false) {
    stack.push(tempStack.pop());

  }
  return stack;

}
const stack = new Stack()
stack.push(10)
stack.push(79)
stack.push(94)
stack.push(21)
const s = stack.size()
sortInteractive(stack)
for (let i = 0; i < s; i++) {
  console.log(stack.pop()) // 10, 21, 79, 94
}
