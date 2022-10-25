class Node {
  constructor(value) {
    this.val = value; //value of the Node
    this.leftChild = null; //leftChild (will also be of the Node class)
    this.rightChild = null; //rightChild (will also be of the Node class)
  }

}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue); //the rootNode
  }

  insert(newValue) {
    if(this.root==null){
      this.root=new Node(newValue);
      return;
    }
    let currentNode = this.root;
    let parent;
    while (currentNode) {
      parent = currentNode;
      if (newValue < currentNode.val) {
        currentNode = currentNode.leftChild
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    if (newValue < parent.val) {
      parent.leftChild = new Node(newValue)
    } else {
      parent.rightChild = new Node(newValue)
    }
  }

  // https://i.ytimg.com/vi/WLvU5EQVZqY/maxresdefault.jpg
  preOrderPrint(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }

  }

  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.inOrderPrint(currentNode.leftChild);
      console.log(currentNode.val);
      this.inOrderPrint(currentNode.rightChild);
    }

  }
  postOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.postOrderPrint(currentNode.leftChild);
      this.postOrderPrint(currentNode.rightChild);
      console.log(currentNode.val);
    }
  }

  search(value) {
    let currentNode = this.root;
    while (currentNode && (currentNode.val != value)) {
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;

      }
    }
    return currentNode;
  }
}



const BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insert(4)
BST.insert(9)
BST.insert(5)
BST.insert(2)
BST.insert(8)
BST.insert(12)
BST.insert(10)
BST.insert(14)

BST.inOrderPrint(BST.root)
console.log((BST.search(8)))
console.log(BST.search(11))
