class ListNode {
  public value: number;

  public next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class MyLinkedList {
  public head: ListNode | null = null;

  constructor() {}

  get(index: number): number {
    let i = 0;
    let node = this.head;

    while (node) {
      if (i === index && node) {
        return node.value;
      }

      node = node.next;
      i += 1;
    }

    return -1;
  }

  addAtHead(val: number): void {
    const node: ListNode = new ListNode(val);

    node.next = this.head;
    this.head = node;
  }

  addAtTail(val: number): void {
    const tail = new ListNode(val);
    const last = this.getLastNode();

    if (!last) {
      this.head = tail;

      return;
    }

    last.next = tail;
  }

  addAtIndex(index: number, val: number): void {
    if (this.length < index || index < 0) {
      return;
    }

    if (index === this.length) {
      this.addAtTail(val);

      return;
    }

    if (index === 0) {
      this.addAtHead(val);

      return;
    }

    const nodeToInsert = new ListNode(val);
    let prev: ListNode | null = null;
    let current = this.head;
    let i = 0;

    while (current) {
      if (index - 1 === i) {
        prev = current;
        nodeToInsert.next = current.next;
        prev.next = nodeToInsert;

        return;
      }

      current = current.next;
      i += 1;
    }
  }

  deleteAtIndex(index: number): void {
    if (!this.head || index < 0 || index > this.length - 1) {
      return;
    }

    let current: ListNode | null = this.head;
    let prev: ListNode | null = this.head;
    let i = 0;

    if (index === 0) {
      this.head = this.head?.next;

      return;
    }

    while (current) {
      if (index - 1 === i) {
        prev = current;
        const nodeToRemove = current.next;
        prev.next = nodeToRemove ? nodeToRemove.next : null;
      }

      current = current.next;
      i += 1;
    }
  }

  getLastNode(): ListNode | null {
    let current: ListNode | null = this.head;

    while (current && current.next) {
      current = current.next;
    }

    return current;
  }

  get length(): number {
    let length = 0;
    let current: ListNode | null = this.head;

    if (!this.head) {
      return length;
    }

    while (current) {
      length += 1;
      current = current.next;
    }

    return length;
  }
}