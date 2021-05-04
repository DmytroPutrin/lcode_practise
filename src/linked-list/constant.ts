import { ListNode } from "./ListNode";
import { MyLinkedList } from "./LinkedList";

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

export { listWithLoop, listWithoutLoop };