'use strict';

// Require our linked list implementation
const Node = require('../node');

describe('Node', () => {
  it('can be created', () => {
    const node = new Node('apple');
    expect(node.value).toBe('apple');
  });
  it('can be created with next', () => {
    const bananaNode = new Node('banana');
    const appleNode = new Node('apple', bananaNode);
    expect(appleNode.next.value).toBe('banana');
  });
});
