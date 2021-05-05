import { ListNode } from "./ListNode";
import { MyLinkedList } from "./LinkedList";

function createList(nodes: number): MyLinkedList {
    const list = new MyLinkedList();
    
    for (let i = 0; i < nodes; i++) {
        list.addAtIndex(i, i);
    }
    
    return list;
}

const listWithLoop = createList(5);
const loopStart: ListNode | null = (listWithLoop.head as ListNode).next;
const lastNode: ListNode | null = listWithLoop.getLastNode();

if (lastNode) {
    lastNode.next = loopStart;
}

const listWithoutLoop = createList(5);
const listWithIntersection1 = createList(3);
const listWithIntersection2 = createList(6);
const listToIntersect = createList(4);

(listWithIntersection1.getLastNode() as ListNode).next = listToIntersect.head;
(listWithIntersection2.getLastNode() as ListNode).next = listToIntersect.head;

export {
    listWithLoop,
    listWithoutLoop,
    listWithIntersection1,
    listWithIntersection2,
};