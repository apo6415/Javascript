class Node {
  key;
  value;
  left;
  right;
  
  constructor(k, v) {
    this.key = k;
    this.value = v;
  }
}

class BST {
  #root  
  constructor() {
    
  }

  deleteMinNode() {
    this.root = this.deleteMin(this.root);
  }
  
  #deleteMin(node) {
    if (node.left === null) {
      return node.right;
    }

    node.left = deleteMin(node.left);

    return node;
  }

  insertNode(node, k, v) {
    if (node === null) {
      return new Node(k, v);
    }

    if (key < node.key) {
      node.left = insertNode(node.left, k, v);
    } else if (key > node.key) {
      node.right = insertNode(node.right, k, v);
    } else {
      node.value = v;
    }

    return node;
  }

  getNodeVal(key) {
    let tracer = this.root;
    while (tracer != null) {
      if (key < tracer.key) {
        tracer = tracer.left;
      } else if (key > tracer.key) {
        tracer = tracer.right
      } else {
        return tracer.value;
      }
    }

    return null;
  }
}
