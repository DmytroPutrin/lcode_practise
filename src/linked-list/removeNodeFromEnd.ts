import { ListNode } from "./ListNode";
import { createList } from "./constant";

export function removeNodeFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head || !head.next) {
        return null;
    }

    let startNode: ListNode | null = head;
    let removeNode: ListNode | null = head;
    let prevNode: ListNode | null = null;

    for (let i = 0; i < n; i++) {
        startNode = startNode ? startNode.next : null;
    }

    while (startNode) {
        prevNode = removeNode;
        removeNode = removeNode ? removeNode.next : null;
        startNode = startNode.next;
    }

    if (head === removeNode) {
        return head.next;
    }

    (prevNode as ListNode).next = (removeNode as ListNode).next;

    return head;
}

const list = createList(10);
console.log(removeNodeFromEnd(list.head, 3));