import { ListNode } from "./ListNode";
import { createList } from "./constant";

export function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let count = 1;
    let current: ListNode | null = head;
    const evenNodeStart: ListNode | null = head.next;

    while (current) {
        const next: ListNode | null = current.next;
        current.next = current.next ? current.next.next : null;

        if (count % 2 !== 0 && !current.next) {
            current.next = evenNodeStart;
        }

        count += 1;
        current = next;
    }

    return head;
}

const list = createList(10);
console.log(oddEvenList(list.head));