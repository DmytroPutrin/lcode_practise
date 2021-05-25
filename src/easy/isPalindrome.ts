export function isStrPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }

    return true;
}