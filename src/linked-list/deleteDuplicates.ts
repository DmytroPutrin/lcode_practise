import { ListNode } from "./ListNode";
import { createList } from "./constant";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let current: ListNode | null = head;

    while (current) {
        let next: ListNode | null = current.next;

        if (current.value === next?.value) {
            while (next?.value === current.value) {
                next = next ? next.next : null
            }
        }

        current.next = next;
        current = current.next;
    }

    return head;
}

const list = createList(0);
list.addAtIndex(0, 1);
list.addAtIndex(1, 1);
list.addAtIndex(2, 2);

deleteDuplicates(list.head);
console.log(list);