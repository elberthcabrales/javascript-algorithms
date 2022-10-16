"use strict";
class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //Insertion At Head
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returning the updated list
  }

  detectLoop(){
    let one = this.head;
    let two = this.head;
    while(one!=null && two!=null && two.nextElement!=null){
      one = one.nextElement // Moves one node at a time
      two = two.nextElement.nextElement // Moves two nodes at a time
      if (one == two){ // Loop exists
        return true;
      }
    }
    return false;
  }
}


let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

let head = list.head;
let node = list.head;

// Adding a loop
for(var i=0; i<4; i++) {
  if (node.nextElement == null) {
    node.nextElement = head.nextElement;
    break;
  }
  node = node.nextElement
}
console.log(list.detectLoop())
