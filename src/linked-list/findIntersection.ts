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

/* More elegant solutuin which found here:
    https://dev.to/seanpgallivan/solution-intersection-of-two-linked-lists-478e#idea
*/
export function findIntersection2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        currentA = !currentA ? headB : currentA.next;
        currentB = !currentB ? headA : currentB.next;
    }

    return currentA;
}

console.log(findIntersection2(listWithIntersection1.head, listWithIntersection2.head));