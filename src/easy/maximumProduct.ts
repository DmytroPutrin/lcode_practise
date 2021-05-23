export function maximumProduct(nums: number[]): number {
    const sorted = nums.sort((a, b) => a - b);
    const len = sorted.length;
    const max1 = sorted[0] * sorted[1] * sorted[len - 1];
    const max2 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];

    return max1 > max2 ? max1 : max2;
}
