export class ListNode {
    public value: number;

    public next: ListNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}

export class DoublyListNode {
    public value: number;

    public prev: DoublyListNode | null = null;

    public next: DoublyListNode | null = null;

    public child: DoublyListNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}