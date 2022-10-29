//https://www.cs.usfca.edu/~galles/visualization/Heap.html
class maxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }

  maxHeapify(index) {
    let left = (index * 2)+1;
    let right = (index * 2)+2;
    let largest = index;

    //check which value is biggest
    if(this.heap[left] > this.heap[largest]){
      largest = left
    }
    if(this.heap[right] > this.heap[largest]){
      largest = right
    }

    if(largest != index){
     const temp = this.heap[largest]
     this.heap[largest] = this.heap[index];
     this.heap[index] = temp;
     this.maxHeapify(largest);
    }
  }

  buildHeap(arr){
    this.heap = arr;
    this.elements = this.heap.length;
    for (let i = this.heap.length - 1; i >= 0; i--){
      this.maxHeapify(i)
    }

  }
  getMax(){
    if(this.heap.length === 0){
      return null;
    }
    return this.heap[0];
  }
}
const heap = new maxHeap()
const arr =  [2,8,15,5,1,20]
heap.buildHeap(arr)
console.log(heap.getMax())
/*heap.insert(50)
console.log(heap.getMax())

heap.removeMax()

console.log(heap.getMax())*/
