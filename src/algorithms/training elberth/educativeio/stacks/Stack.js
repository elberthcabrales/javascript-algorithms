class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  size(){
    return this.items.length;
  }

  isEmpty(){
    return this.items.length === 0
  }

  getTop(){
    return this.top;
  }
  //O(1)
  push(element){
    this.items.push(element);
    this.top = element;
  }
  //O(1)
  pop(){
    if(this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    }
    return this.top;
  }
}

let myStack = new Stack();
// test myStack
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.getTop());
console.log(myStack.pop());
console.log(myStack.isEmpty())
