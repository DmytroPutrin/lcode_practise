import { ListNode } from "./ListNode";
import { MyLinkedList } from "./LinkedList";
import { createList } from  "./constant";

export function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let current: ListNode | null = head.next;
    const originHead: ListNode | null = head;

    while (current) {
        const next: ListNode | null = current.next;
        current.next = head;
        head = current;

        if (!next) {
            originHead.next = null;
        }

        current = next;
    }

    return head;
};

const list = createList(5);
console.log(reverseList(list.head));
