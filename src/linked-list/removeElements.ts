import { MyLinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";
import { createList } from "./constant";

export function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null;
    }

    let previous: ListNode | null = null;
    let current: ListNode | null = head;
    let newHead: ListNode | null = null;

    while (current) {
        if (!newHead && current.value !== val) {
            newHead = current;
        }

        if (current.value === val) {
            if (previous) {
                previous.next = current.next;
                current = previous;
            }
        }

        previous = current ? current : previous;
        current = current ? current.next : null;
    }

    return newHead;
};

const list = createList(6);
list.addAtIndex(2, 5)
console.log(removeElements(list.head, 5));