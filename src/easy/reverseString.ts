export function reverserString(s: string[]): void {
    const len = s.length;
    let p1 = 0;
    let p2 = len - 1;

    while (p1 < p2) {
        const current = s[p1];

        s[p1] = s[p2];
        s[p2] = current;
        p1 += 1;
        p2 -= 1;
    }
}