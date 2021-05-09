import { DoublyListNode } from "./ListNode";

export class DoublyLinkedList {
    public head: DoublyListNode | null = null;

    public tail: DoublyListNode | null = null;

    get(index: number): number {
        const node = this.getNodeByIndex(index);

        return node ? node.value : -1;
    }

    addAtHead(val: number): void {
        const node: DoublyListNode = new DoublyListNode(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;

            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    addAtTail(val: number): void {
        const newTail = new DoublyListNode(val);

        if (!this.tail) {
            this.head = newTail;
            this.tail = newTail;

            return;
        }


        newTail.prev = this.tail;
        this.tail.next = newTail;
        this.tail = newTail;
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

        const nodeToInsert = new DoublyListNode(val);
        const current = this.getNodeByIndex(index);
        const previous = current ? current.prev : null;

        nodeToInsert.prev = previous;

        if (current) {
            current.prev = nodeToInsert;
        }

        if (previous) {
            previous.next = nodeToInsert;
        }


        nodeToInsert.next = current;

    }

    deleteAtIndex(index: number): void {
        if (!this.head || index < 0 || index > this.length - 1) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;

            if (this.head) {
                this.head.prev = null
            }

            return;
        }

        if (index === this.length - 1) {
            this.tail = this.tail ? this.tail.prev : null;

            if (this.tail) {
                this.tail.next = null;
            }

            return;
        }

        const nodeToRemove = this.getNodeByIndex(index);

        if(!nodeToRemove) {
            return;
        }

        const { prev, next } = nodeToRemove;

        if (prev) {
            prev.next = next;
        }

        if (next) {
            next.prev = prev;
        }

    }

    getLastNode(): DoublyListNode | null {
        let current: DoublyListNode | null = this.head;

        while (current && current.next) {
            current = current.next;
        }

        return current;
    }

    get length(): number {
        let length = 0;
        let current: DoublyListNode | null = this.head;

        if (!this.head) {
            return length;
        }

        while (current) {
            length += 1;
            current = current.next;
        }

        return length;
    }

    private getNodeByIndex(index: number): DoublyListNode | null {
        if (!this.head || index === 0) {
            return this.head;
        }

        if (this.length - 1 === index) {
            return this.tail;
        }

        let current: DoublyListNode | null = this.head;
        let i = 0;

        while(current) {
            if (i === index) {
                return current;
            }

            i += 1;
            current = current.next;
        }

        return null;
    }
}