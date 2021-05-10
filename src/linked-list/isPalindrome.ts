import { ListNode } from "./ListNode";
import { createList } from "./constant";

export function isPalindrome(head: ListNode | null): boolean {
    let str = '';
    let reversedStr = '';

    while (head) {
        const { value } = head;
        str += value;
        reversedStr = value + reversedStr;
        head = head.next;
    }

    return str === reversedStr;
};

const palindromeList = createList(1);
palindromeList.deleteAtIndex(0);
palindromeList.addAtIndex(0, 1);
palindromeList.addAtIndex(1, 2);
palindromeList.addAtIndex(2, 2);
palindromeList.addAtIndex(3, 1);
console.log(isPalindrome(palindromeList.head));