'use strict';

const Node = require('../linked-list/node');

class Queue {

  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    newNode.next = '????'; // MYSTERY - clue, think like a bank teller

    this.rear = newNode;

    if(this.front === null) {
      this.front = this.rear;
    }
  }

  dequeue() {
    return null; // TODO
  }

  peek() {
    return this.front.value;
  }

}

module.exports = Queue;
