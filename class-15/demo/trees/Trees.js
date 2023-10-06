'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// STRETCH GOAL
class KaryNode {
  constructor(k, value) {
    this.value = value;
    this.children = new Array(k);
  }
}
class KaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let order = [];


    const traverse = (current) => {
      order.push(current.value);

      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(this.root);

    return order;
  }

  inOrder() {
    let order = [];


    const traverse = (current) => {
      if (current.left) {
        traverse(current.left);
      }

      order.push(current.value);

      if (current.right) {
        traverse(current.right);
      }
    }
    traverse(this.root);

    return order;
  }

  postOrder() {
    let order = [];

    const traverse = (current) => {      
      if (current.left) {
        traverse(current.left);
      }
      if (current.right) {
        traverse(current.right);
      }
      
      order.push(current.value);
    }
    traverse(this.root);

    return order;
  }

  // breadth first traversal
  bfs() {
    let root = this.root;

    let queue = [];
    let order = [];
    queue.push(root);

    while(queue.length > 0) {
      let current = queue.shift();
      order.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return order;
  }
}

// Binary Search Tree is everything a Binary Tree plus other things.
class BinarySearchTree extends BinaryTree {
  constructor() {
    super(); // activate Binary Tree Powers
  }

  // adds a value to our BST
  add(value) {}

  // searches for a value in our BST, and returns a boolean
  contains(value) {}
}

let tree = new BinaryTree();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

tree.root = node1;

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node5.left = node6;
node5.right = node7;

// console.log(tree.root);

let preOrder = tree.preOrder();
let breadthFirst = tree.bfs();
// console.log(preOrder);
console.log(breadthFirst);