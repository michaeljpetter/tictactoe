export default class LinkedList {
  static Node = class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  };

  constructor(values) {
    this.head = this.tail = null;
    let i = (values || []).length;
    if(i === 0) return;
    this.head = this.tail = new LinkedList.Node(values[--i], null);
    while(i > 0)
      this.head = new LinkedList.Node(values[--i], this.head);
  }

  cycle() {
    if(!this.tail)
      throw 'cannot cycle an empty list';
    this.tail.next = this.head;
    return this;
  }
}
