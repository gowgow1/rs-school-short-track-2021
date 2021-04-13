const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor() {
    this.noda = new ListNode();
    this.copy = this.noda;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    this.copy.value = element;
    this.copy.next = new ListNode();
    this.copy = this.copy.next;
  }

  dequeue() {
    const it = this.noda.value;
    this.noda.value = this.noda.next.value;
    this.noda.next = this.noda.next.next;
    return it;
  }
}

module.exports = Queue;
