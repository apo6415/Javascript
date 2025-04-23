/*
 * ChatGPT generated code
*/

const RED = true;
const BLACK = false;

class Node {
  constructor(key, value, color = RED) {
    this.key = key;
    this.value = value;
    this.color = color;
    this.left = null;
    this.right = null;
  }
}

class LLRBTree {
  constructor() {
    this.root = null;
  }

  isRed(node) {
    return node !== null && node.color === RED;
  }

  rotateLeft(node) {
    const x = node.right;
    node.right = x.left;
    x.left = node;
    x.color = node.color;
    node.color = RED;
    return x;
  }

  rotateRight(node) {
    const x = node.left;
    node.left = x.right;
    x.right = node;
    x.color = node.color;
    node.color = RED;
    return x;
  }

  flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }

  insert(key, value) {
    this.root = this.insertNode(this.root, key, value);
    this.root.color = BLACK;
  }

  insertNode(node, key, value) {
    if (node === null) {
      return new Node(key, value);
    }

    if (key < node.key) {
      node.left = this.insertNode(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key, value);
    } else {
      node.value = value;
    }

    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.rotateLeft(node);
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rotateRight(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }

    return node;
  }
}
