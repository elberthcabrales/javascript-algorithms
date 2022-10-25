const {Stack} = require("./Stack");

//We can use 2 stacks for this purpose,mainStack to store original values
//and tempStack which will help in enqueue operation.
class newQueue {
  constructor() {
    this.tempStack = new Stack();
    this.mainStack = new Stack();
  }
  enqueue(value) {
    this.tempStack.push(value);
  }

  dequeue() {
    while (this.tempStack.isEmpty() === false){
      this.mainStack.push(this.tempStack.pop())
    }

    return this.mainStack.pop();
  }

}

const queue = new newQueue()
for(let i=0;i<5;i++)
  queue.enqueue(i+1)

console.log("----------");

for(let i=0;i<5;i++)
  console.log(queue.dequeue())

/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */
