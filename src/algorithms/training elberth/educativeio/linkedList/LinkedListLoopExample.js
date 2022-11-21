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
    let slower = this.head;
    let faster = this.head;
    while(slower!=null && faster!=null && faster.nextElement!=null){
      slower = slower.nextElement // Moves one node at a time
      faster = faster.nextElement.nextElement // Moves two nodes at a time
      if (slower == faster){ // Loop exists
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
