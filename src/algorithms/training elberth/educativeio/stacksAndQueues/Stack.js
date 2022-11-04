class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  size(){
    return this.items.length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  push(value){
    this.items.push(value);
    this.top = value;

    return this.items;
  }

  pop(){
    if(this.isEmpty()){
      return null;
    }
    if(this.size() === 1){
      const top = this.items.pop();
      this.top = null;
      return top;
    }
    this.top = this.items[this.items.length - 2]
    return this.items.pop();
  }
}

class proxyMinStack{
  constructor() {
    this.mainStack = new Stack()
    this.minStack = new Stack()
  }

  //Removes and returns a value from newStack
  pop() {
    this.minStack.pop();
    return this.mainStack.pop();
  }
  //Pushes values into newStack
  push(value) {
    this.mainStack.push(value)
    if(!this.minStack.isEmpty() && value > this.minStack.top){
      this.minStack.push(this.minStack.top);
    }else {
      this.minStack.push(value)
    }

    return this.mainStack.items;
  }
  //Returns the minimum value from newStack in O(1) Time
  min() {
    return this.minStack.top;
  }

  top() {
    return this.mainStack.top;
  }
}

module.exports = {
  Stack,
}
/**
let stack = new proxyMinStack();

stack.push(5)
stack.push(2)
stack.push(4)
stack.push(1)
stack.push(3)
stack.push(9)

console.log("minimum value: ",stack.min())

stack.pop()
stack.pop()
stack.pop()

console.log("minimum value: " ,stack.min())


  * minimum value:  1
 * minimum value:  2
 */
