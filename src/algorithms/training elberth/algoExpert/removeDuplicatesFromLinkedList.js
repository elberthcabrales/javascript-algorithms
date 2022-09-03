// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextNode = currentNode.next;
    while (nextNode !== null && nextNode.value === currentNode.value) { // Aqui esta la magia
      nextNode = nextNode.next;
    }
    currentNode.next = nextNode;
    currentNode = nextNode;
  }

  return linkedList;
}

function removeDuplicated(linkedList) {
  let current = linkedList;
  if (!current && current.value === null) return current;
  const memory = new Set([current.value]);
  while (current !== null && current.next !== null) {
    if (memory.has(current.next.value)) {
      current.next = current.next.next;
    } else {
      current = current.next;
      memory.add(current.value);
    }
  }

  return linkedList;
}

function search(linkedList) {
  let refObj = linkedList;
  while (refObj !== null && refObj.next) {
    console.log(refObj.value);
    refObj = refObj.next;
    if (refObj.value === 4) {
      refObj.value = 100000;
    }
  }
  console.log(linkedList);
}

const list = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
// const result = removeDuplicated(list)
// const expected = new LinkedList(1).addMany([3, 4, 5, 6]);
console.log(search(list));
