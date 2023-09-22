'use strict';

// storage container (knot)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// the whole rope!
class LinkedList {
  constructor() {
    this.head = null;
  }

  // adding a value to the end of the linked list.
  append(value) {
    let current = this.head;
    let newNode = new Node(value);

    while(current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

let survivalRope = new LinkedList();

let sandwich = new Node('sandwich');

survivalRope.head = sandwich;

let firstAid = new Node('first aid');

survivalRope.head.next = firstAid;

let blowGun = new Node('blow gun');
let sunscreen = new Node('sunscreen');

firstAid.next = blowGun;
blowGun.next = sunscreen;

// console.log(JSON.stringify(survivalRope));

// start at the head and move until now more nodes.
// Big 0 -> time: O(n), Space: O(1)
function traversal (list) {

  let current = list.head; // this must of Type Node OR Null.

  while (current) {
    console.log('CURRENT NODE VALUE:', current.value);
    current = current.next;
  }
}

survivalRope.append('paddle');

traversal(survivalRope);

module.exports = LinkedList;