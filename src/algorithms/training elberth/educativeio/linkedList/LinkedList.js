class Node {
  constructor(data){
    this.data=data;
    this.nextElement=null;
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

  isEmpty() {
    return (this.head == null);
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  printListRecursive() {
    const printRec = (node) => {
      if (node === null) {
        return;
      }
      process.stdout.write(String(node.data));
      process.stdout.write(" -> ");
      printRec(node.nextElement)
    }
    return printRec(this.head)
  }

  getHead() {
    return this.head;
  }

  insertAtTail(newData) {
    //Creating a new Node with data as newData
    let node = new Node(newData);

    //check for case when list is empty
    if (this.isEmpty()) {
      //Needs to Insert the new node at Head
      this.head = node;
      return this;
    }

    //Start from head
    let currentNode = this.head;

    //Iterate to the last element
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    //Make new node the nextElement of last node of list
    currentNode.nextElement = node;
    return this;
  }
  search(value) {
    //Start from the first element
    let currentNode = this.head;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; //value found
      }
      currentNode = currentNode.nextElement
    }
    return false; //value not found
  }

  deleteAtHead() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;

    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;

    return this;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }
    // create a clone of head like prototype pattern
    let temp = this.head;

    if (temp.nextElement === null) {
      this.head = temp.nextElement;
      return this;
    }

    while (temp.nextElement !== null) {
      if (temp.nextElement.nextElement === null) {
        temp.nextElement = null;
      } else {
        temp = temp.nextElement;
      }
    }
    return this;
  }

  deleteVal(data) {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return false;
    }

    let temp = this.head;

    if (temp.data === data) {
      this.head = temp.nextElement
      return true;
    }

    while (temp.nextElement !== null) {
      if (temp.nextElement.data === data) {
        temp.nextElement = temp.nextElement.nextElement
      }
      temp = temp.nextElement
    }
  }

  length() {
    let length = 0;
    let temp = this.head;
    while (temp !== null) {
      length++;
      temp = temp.nextElement
    }

    return length;
  }

  reverse() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.nextElement; //backup next node before reversing
      currentNode.nextElement = previousNprintRecode; // reverse the direction
      previousNode = currentNode // backup currentNode in previousNode don't edit origin reference
      currentNode = nextNode;// use nextNode for prevent edit origin reference
    }
    this.head = previousNode;
    return this;
  }

  findMid() {
    if (this.isEmpty()) {
      return this;
    }

    let slower = this.head;
    let faster = this.head;

    if (slower.nextElement == null) {
      return slower;
    }
    while (slower.nextElement !== null && faster.nextElement !== null && faster.nextElement.nextElement !== null) {
      slower = slower.nextElement;
      faster = faster.nextElement.nextElement;
    }

    return slower.data;
  }
  removeDuplicated() {
    if (this.isEmpty()) {
      return this;
    }
    const set = new Set();
    let current = this.head;
    let prev = current;

    while (current.nextElement != null) {
      // If current value is seen before
      if (set.has(current.data)) {
        prev.nextElement = current.nextElement; // jump prev to next
      } else {
        set.add(current.data);
        prev = current;
      }
      current = current.nextElement; // like here
    }
    return this;
  }

  removeDuplicates() {
    if (this.isEmpty()) {
      return this;
    }
    let list = this.head;
    const set = new Set();
    set.add(list.data)
    while (list.nextElement != null) {
      if (set.has(list.nextElement.data)) {
        list.nextElement = list.nextElement.nextElement
      } else {
        set.add(list.nextElement.data)
        list = list.nextElement
      }
    }

    return list
  }
}

// test all methods for LinkedList
let list = new LinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtHead(3);
list.insertAtHead(4);
list.insertAtHead(5);
list.printListRecursive();
list.insertAtTail(6);
list.insertAtTail(7);
list.insertAtTail(8);
list.printList();
console.log(`list.search(5): ${list.search(5)}`);
console.log(`list.search(11): ${list.search(11)}`);
console.log(list.getHead().data)
list.deleteAtHead();
console.log(`executed list.deleteAtHead()`);

console.log(list.getHead().data)
console.log(`list.search(5): ${list.search(5)}`);
list.printList();
list.deleteVal(2);
console.log(`executed list.deleteVal(8)`);
list.printList();


console.log(`executed list.deleteAtTail()`);
list.deleteAtTail()
list.printList();
console.log(`list.length(): ${list.length()}`);
list.printList();
list.reverse()
list.printList()
console.log(JSON.stringify(list))
console.log(list.findMid())
// insert duplicated and delete
list.insertAtHead(6);
list.printList()
//before 6 -> 7 -> 6 -> 1 -> 3 -> 4 -> null
list.removeDuplicates()
// after 6 -> 7 -> 1 -> 3 -> 4 -> null
list.printList()
let list2 = new LinkedList();
list2.insertAtHead(2);
list2.insertAtHead(1);
list2.insertAtHead(1);
list2.printList()
list2.removeDuplicated();
list2.printList()
