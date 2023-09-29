'use strict';

const Node = require('../linked-list/node');

class Stack {

  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  peek() {
    if(this.isEmpty()) {
      throw new Error('Stack is empty, silly');
    }

    return this.top.value;
  }

}

module.exports = Stack;
