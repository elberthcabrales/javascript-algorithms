class Node {
  constructor(data){
    this.value=data;
    this.next=null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  insertAtHead(value){
    const node = new Node(value)
    node.next = this.head;
    this.head = node;
    return this;
  }

  printList(){
    let current = this.head

    while (current != null){
      process.stdout.write(String(current.value))
      process.stdout.write('->')
      current = current.next
    }
    console.log('')
    return this;
  }

  reverseList(){
    let current = this.head;
    let auxNode = null;
    let previous = null;

    while (current != null){
      auxNode = current.next
      current.next = previous
      previous = current
      current = auxNode
    }

    this.head = previous
    return this;
  }

  removeDuplicates(){
    let current = this.head
    const set = new Set()
    set.add(current.value)
    while (current.next != null){
      if(set.has(current.next.value)){
        current.next = current.next.next
      }
      set.add(current.next.value)
      current = current.next
    }

    return current;
  }

  remove(value){
    let current = this.head
    if(current.value === value){
      this.head = current.next
    }

    while(current.next != null){
     if(current.next.value === value){
       current.next = current.next.next
     }
     current = current.next
    }
  }

  insertAtTail(value) {
    let current = this.head
    if (current.next == null) {
      current.next = new Node(value)
    }

    while (current.next != null) {
      current = current.next
    }

    current.next = new Node(value)
    return this;
  }

  removeTail(){
    let current = this.head;
    if (current.next == null) {
      this.head = current.next;
      return this;
    }

    while (current.next != null) {
      if(current.next.next == null){
        current.next = null
        break;
      }
      current = current.next
    }

    return this;

  }
}

const list = new LinkedList()
list.insertAtHead(1)
list.insertAtHead(2)
list.insertAtHead(2)
list.insertAtHead(3)
list.insertAtHead(4)
list.insertAtHead(5)
console.log(JSON.stringify(list))
list.removeDuplicates()
list.printList()
list.reverseList()
console.log(JSON.stringify(list))
list.remove(4)
list.remove(1)
list.printList()
list.insertAtTail(10)
console.log(JSON.stringify(list))
list.removeTail()
console.log(JSON.stringify(list))
