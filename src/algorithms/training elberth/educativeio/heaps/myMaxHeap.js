//https://www.cs.usfca.edu/~galles/visualization/Heap.html
class maxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }

  maxHeapify(index) {
    let left = (index * 2) + 1;  //left child index
    let right = (index * 2) + 2;  //right child index
    let longest = index;
    console.log(`${JSON.stringify(this)}  index:${index} longest: ${longest} left: ${left} right: ${right}`)
    //If left child is smaller than root
    if (this.heap[left] > this.heap[longest]) {
      longest = left
    }
    // If right child is smaller than smallest so far
    if (this.heap[right] > this.heap[longest]){
      longest = right
    }
    // If smallest is not root
    if (longest != index) {
      //swap
      let tmp = this.heap[longest]
      this.heap[longest] = this.heap[index]
      this.heap[index] = tmp
      console.log(`swap longest: ${longest}  and index: ${index}`);
      console.log(`recursive call maxHeapify(${longest}) and index is ${index}`);
      this.maxHeapify(longest)
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
const arr =  [2,80,15,5]
heap.buildHeap(arr)
console.log(heap.getMax())
/*heap.insert(50)
console.log(heap.getMax())

heap.removeMax()

console.log(heap.getMax())*/
