import { ListNode } from "./ListNode";
import {createList} from "./constant";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let value1 = '';
    let value2 = '';

    while (l1) {
        value1 = l1.value + value1;
        l1 = l1.next;
    }

    while (l2) {
        value2 = l2.value + value2;
        l2 = l2.next;
    }

    const len = value1.length > value2.length ? value1.length : value2.length;

    if (value1.length > value2.length) {
        const diff = value1.length - value2.length;
        const str = '0'.repeat(diff);

        value2 = str + value2;
    } else if (value2.length > value1.length) {
        const diff = value2.length - value1.length;
        const str = '0'.repeat(diff);

        value1 = str + value1;
    }

    let result = '';
    let addOne = 0;

    for (let i = len - 1; i >= 0; i--) {
        const num1 = value1[i] !== undefined ? +value1[i] : 0;
        const num2 = value2[i] !== undefined ? +value2[i] : 0;
        const sum = num1 + num2 + addOne;
        const num = sum > 9 ? sum.toString()[1] : sum;

        result += num.toString();
        addOne = sum > 9 ? 1 : 0;
    }

    if (addOne) {
        result += 1;
    }

    const head = new ListNode(NaN);
    let current: any = head;

    for (let i = 0; i < result.length; i++) {
        current.value = +result[i];
        current.next = result[i + 1] !== undefined ? new ListNode(NaN) : null;
        current = current.next;
    }

    return head;
}

const list1 = createList(0);
list1.addAtIndex(0, 2);
list1.addAtIndex(1, 4);
list1.addAtIndex(2, 3);

const list2 = createList(0);
list2.addAtIndex(0, 5);
list2.addAtIndex(1, 6);
list2.addAtIndex(2, 4);

console.log(addTwoNumbers(list1.head, list2.head));