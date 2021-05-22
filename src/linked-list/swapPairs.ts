import { ListNode } from "./ListNode";


export function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let current: ListNode | null = head;
    const newHead = current.next;
    let last: ListNode | null = null;

    while (current) {
        const next: ListNode | null = current.next ? current.next.next : null;

        if (current.next) {
            const temp = current.next;

            temp.next = current;
            current.next = next ? next.next : null;
            last = temp.next;
        } else {
            if (current && last) {
                last.next = current;
            }
        }

        current = next;
    }

    return newHead;
}