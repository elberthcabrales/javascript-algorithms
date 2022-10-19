class Stack {
  constructor() {
    this.items = []
    this.top = null;
    this.min = Infinity;
  }
  push(value){
    this.items.push(value);
    this.top = value;

    return this.items;
  }
  getTop(){
    return this.top;
  }
  pop(){
    if(this.isEmpty()){
      return null;
    }
    if(this.items.length === 1){
      this.top = null;
      this.items.pop();
      return null;
    }
    const newTop = this.items[this.items.length - 2];
    this.items.pop();
    this.top = newTop;

    return this.items;
  }
  isEmpty(){
    return this.items.length === 0;
  }
  size(){
    return this.items.length;
  }
}

let myStack = new Stack();
// test myStack
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(-2);
console.log(myStack.size()) // 6
console.log(myStack.getTop()); // get -2
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
