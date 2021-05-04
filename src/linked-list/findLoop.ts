import { ListNode } from "./ListNode";
import { listWithLoop, listWithoutLoop } from "./constant";

function detectLoop(head: ListNode | null): boolean {
    if (head === null) {
        return false;
    }

    let turtle: ListNode | null = head;
    let hare: ListNode | null = head.next;

    while (turtle !== hare) {
        if (!hare || !hare.next) {
            return false;
        }

        turtle = turtle ? turtle.next : null;
        hare = hare.next.next;
    }

    return true;
}

console.log(detectLoop(listWithLoop.head));
console.log(detectLoop(listWithoutLoop.head));

function detectLoop2(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let turtle: ListNode | null = head;
    let hare: ListNode | null = head;

    while(hare && hare.next) {
        turtle = turtle ? turtle.next : null;
        hare = hare.next.next;
        
        if (turtle === hare) {
            break;
        }
    }

    if(!hare || !hare.next) {
        return null;
    }
    
    turtle = head;
    
    while(turtle !== hare) {
        turtle = turtle ? turtle.next : null;
        hare = hare ? hare.next : null;
    }

    return turtle;
};

console.log(detectLoop2(listWithLoop.head));
console.log(detectLoop2(listWithoutLoop.head));