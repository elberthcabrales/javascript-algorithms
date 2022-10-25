const {Queue} = require("./queue");
const {Stack} = require("./Stack");

function reverseK(queue, k){
  const size = queue.size()
  const stack = new Stack()
  const queueAux = new Queue();
  for(let i =0; i < k; i++){
    const val = queue.dequeue()
    stack.push(val);
  }

  for(let i = 0; i < size; i++){
    if(k > i){
      queueAux.enqueue(stack.pop());
    }else{
      queueAux.enqueue(queue.dequeue())
    }
  }


  return queueAux;
}

//[1,2,3,4,5,6,7,8,9,10]
const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(10)
const k = 5;
console.log(JSON.stringify(reverseK(queue, k)));
