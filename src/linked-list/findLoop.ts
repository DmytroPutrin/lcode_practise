import {ListNode, MyLinkedList} from "./LinkedList";

const listWithLoop = new MyLinkedList();
for (let i = 0; i < 5; i++) {
    listWithLoop.addAtIndex(i, i);
}

const loopStart: ListNode | null = (listWithLoop.head as ListNode).next;
const lastNode: ListNode | null = listWithLoop.getLastNode();

if (lastNode) {
    lastNode.next = loopStart;
}

const listWithoutLoop = new MyLinkedList();
for (let i = 0; i < 5; i++) {
    listWithoutLoop.addAtIndex(i, i);
}

function detectLoop(head: ListNode | null): boolean {
    if (head === null) {
        return false;
    }

    let turtle: ListNode | null = head;
    let hare: ListNode | null = head.next;

    while (turtle !== hare) {
        if (!hare || !hare.next) {
            return false;
        }

        turtle = turtle ? turtle.next : null;
        hare = hare.next.next;
    }

    return true;
}

console.log(detectLoop(listWithLoop.head));
console.log(detectLoop(listWithoutLoop.head));