class LinkedList {
  constructor(value, ref = null) {
    this.value = value;
    this.next = ref
  }

  createMany(values){
    let current = this;
    for(const val of values){
      if(!current){
        current = new LinkedList(val);
      } else {
        current.next = new LinkedList(val)
        current = current.next
      }
    }
  }
}

const list = new LinkedList(1).createMany([5,  6, 8, 9])
list
