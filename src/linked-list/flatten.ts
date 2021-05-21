import { DoublyListNode } from "./ListNode";
import { DoublyLinkedList } from "./DublyLinkedList";

export function flatten(head: DoublyListNode | null): DoublyListNode | null {
    if (!head) {
        return head;
    }

    let current: DoublyListNode | null = head;

    while (current) {
        if (!current.child) {
            current = current.next;
        } else {
            console.log('here');
            const next = current.next;
            let child = current.child;

            child.prev = current;
            current.next = current.child;
            current.child = null;

            while (child.next) {
                child = child.next;
            }

            child.next = next;

            if (next) {
                next.prev = child;
            }

            current = current.prev ? current.prev : current;
        }
    }

    return head;
}

const list = new DoublyLinkedList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);

const list2 = new DoublyLinkedList();
list2.addAtHead(7)
list2.addAtTail(8);
list2.addAtTail(9);
list2.addAtTail(10);

const list3 = new DoublyLinkedList();
list3.addAtHead(11);
list3.addAtTail(12);

(list.getNodeByIndex(2) as DoublyListNode).child = list2.head;
(list2.getNodeByIndex(1) as DoublyListNode).child = list3.head;

console.log(flatten(list.head));