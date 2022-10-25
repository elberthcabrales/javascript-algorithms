class Queue {

  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (!(this.isEmpty())) {
      return this.items[this.items.length - 1]
    } else
      return null;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

}

module.exports = {
  Queue,
}
/**
function findBin(n) {
  const result = []
  if(n <= 0) return result;
  const queue = new Queue()
  queue.enqueue("1")
  let strOne, strZero;
  for(let i = 0; i < n; i++){
    const val = queue.dequeue();
    result.push(val);
    strZero = result[i] + "0"
    strOne = result[i] + "1"
    queue.enqueue(strZero);
    queue.enqueue(strOne);
  }

  return result;
}


 * [ '1' ]
 * [ '1', '10' ]
 * [ '1', '10', '11' ]
 * [ '1', '10', '11', '100' ]
 * [ '1', '10', '11', '100', '101' ]
 * [ '1', '10', '11', '100', '101', '110' ]
 * [ '1', '10', '11', '100', '101', '110', '111' ]
 * [ '1', '10', '11', '100', '101', '110', '111', '1000' ]
 * [ '1', '10', '11', '100', '101', '110', '111', '1000', '1001' ]
 * [ '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010' ]
 * [ '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010' ]
 */
//process.stdout.write(JSON.stringify(findBin(11))) //[ '1', '10', '11', '100', '101', '110', '111', '1000', '1001', '1010', '1011']
