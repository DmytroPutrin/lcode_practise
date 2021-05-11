import { ListNode } from "./ListNode";
import { createList } from "./constant";

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) {
        return null;
    }

    if (!l1 && l2) {
        return l2;
    }

    if (!l2 && l1) {
        return l1;
    }

    const start: ListNode = new ListNode(-1);
    let current: ListNode = start;

    while (l1 && l2) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    if (l1) {
        current.next = l1;
        l1 = l1.next;
    }

    if (l2) {
        current.next = l2;
        l2 = l2.next;
    }

    return start.next;
}

const l1 = createList(0);
l1.addAtIndex(0, 1);
l1.addAtIndex(1, 2);
l1.addAtIndex(2, 4);

const l2 = createList(0);
l2.addAtIndex(0, 1);
l2.addAtIndex(1, 3);
l2.addAtIndex(2, 4);

console.log(mergeTwoLists(l1.head, l2.head));