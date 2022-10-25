//https://www.cs.usfca.edu/~galles/visualization/Heap.html
class maxHeap {
  constructor() {
    this.heap = [];
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

  getMax() {
    if (this.elements != 0)
      return this.heap[0]
    return null;
  }

  removeMax() {
    if (this.elements > 1) {
      const max = this.heap[0]
      this.heap[0] = this.heap[this.elements - 1]
      this.elements = this.elements - 1
      this.maxHeapify(0)
      return max
    } else if (this.elements == 1) {
      const max = this.heap[0]
      this.elements = this.elements - 1
      return max
    } else {
      return null;
    }
  }

  percolateUp(index) {
    const parent = Math.floor( (index - 1) / 2)
    if (index <= 0)
      return
    else if (this.heap[parent] < this.heap[index]) {
      const tmp = this.heap[parent]
      this.heap[parent] = this.heap[index]
      this.heap[index] = tmp
      this.percolateUp(parent)
    }
  }

  maxHeapify(index) {
    let left = (index * 2) + 1; //left child index
    let right = (index * 2) + 2; //right child index
    let largest = index;
    //If left child is smaller than root
    if ((this.elements > left) && (this.heap[largest] < this.heap[left])) {
      largest = left
    }
    // If right child is smaller than smallest so far
    if ((this.elements > right) && (this.heap[largest] < this.heap[right])){
      largest = right
    }
    // If smallest is not root
    if (largest != index) {
      let tmp = this.heap[largest]
      // here change
      this.heap[largest] = this.heap[index]
      this.heap[index] = tmp
      this.maxHeapify(largest)
    }
  }

  buildHeap(arr){
    this.heap = arr;
    this.elements = this.heap.length;
    for (let i = this.heap.length - 1; i >= 0; i--){
      this.maxHeapify(i)
    }

  }

}
const heap = new maxHeap()
const arr =  [2,8,15,5,1,20]
heap.buildHeap(arr)
console.log(heap.getMax())
heap.insert(50)
console.log(heap.getMax())

heap.removeMax()

console.log(heap.getMax())
