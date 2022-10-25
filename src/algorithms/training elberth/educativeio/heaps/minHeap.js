//https://learnersbucket.com/tutorials/array/heap-data-structure-in-javascript/
//https://www.educative.io/courses/data-structures-coding-interviews-javascript/RMw7Vg8OyQO
class minHeap {
  constructor() {
    this.heap = []
    this.elements = 0;
  }

  insert(val) {
    if (this.elements >= this.heap.length){
      this.elements = this.elements + 1
      this.heap.push(val);
      this.percolateUp(this.heap.length - 1);
    }
    else{
      this.heap[this.elements] = val;
      this.elements = this.elements + 1
      this.percolateUp(this.elements - 1);
    }
  }

  getMin() {
    if (this.heap.length != 0)
      return this.heap[0]
    return null;
  }

  removeMin() {
    if (this.elements > 1) {
      const min = this.heap[0]
      this.heap[0] = this.heap[this.elements - 1]
      this.elements = this.elements - 1
      this.minHeapify(0)
      return min
    } else if (this.elements == 1) {
      const min = this.heap[0]
      this.elements = this.elements - 1
      return min
    } else {
      return null;
    }

  }

  percolateUp(index) {
    let parent = Math.floor( (index - 1) / 2)
    if (index <= 0){
      return
    }
    else if (this.heap[parent] > this.heap[index]) {
      let tmp = this.heap[parent]
      this.heap[parent] = this.heap[index]
      this.heap[index] = tmp
      this.percolateUp(parent)
    }
  }

  minHeapify(index) {
    let left = (index * 2) + 1;
    let right = (index * 2) + 2;
    let smallest = index;
    if ((this.elements > left) && (this.heap[smallest] > this.heap[left])) {
      smallest = left
    }
    if ((this.elements > right) && (this.heap[smallest] > this.heap[right]))
      smallest = right
    if (smallest != index) {
      const tmp = this.heap[smallest]
      this.heap[smallest] = this.heap[index]
      this.heap[index] = tmp
      this.minHeapify(smallest)
    }
  }

  buildHeap(arr){
    this.heap = arr;
    this.elements = this.heap.length;
    for (var i = this.heap.length - 1 ; i >= 0 ; i--){
      this.minHeapify(i)
    }

  }

}
const heap = new minHeap()
heap.insert(12)
heap.insert(10)
heap.insert(-10)
heap.insert(100)

console.log(heap.getMin())

const newHeap = new minHeap()
const arr =  [6,9,3,4,13,22,1,30,17]
newHeap.buildHeap(arr)
console.log(newHeap.getMin())

newHeap.removeMin()

console.log(newHeap.getMin())
