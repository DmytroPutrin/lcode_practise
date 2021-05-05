import { ListNode } from "./ListNode";
import { listWithIntersection1, listWithIntersection2 } from "./constant";

export function findIntersection(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const nodesA = new Set();
    let currentA: ListNode | null = headA;
    let currentB: ListNode | null = headB;

    if (!headA || !headB) {
        return null;
    }

    while (currentA) {
        nodesA.add(currentA);
        currentA = currentA.next;
    }

    while (currentB) {
        if (nodesA.has(currentB)) {
            return currentB;
        }
        currentB = currentB.next;
    }

    return null;
}

console.log(findIntersection(listWithIntersection1.head, listWithIntersection2.head));