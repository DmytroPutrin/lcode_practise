export function getMinDistance(nums: number[], target: number, start: number): number {
    if (nums[start] === target) {
        return 0;
    }

    let left = start - 1;
    let right = start + 1;

    while(nums[left] !== undefined || nums[right] !== undefined) {
        if (nums[left] === target) {
            return Math.abs(left - start);
        }

        if (nums[right] === target) {
            return Math.abs(right - start);
        }

        left--;
        right++;
    }

    return -1;
}

console.log(getMinDistance([1,2,3,4,5], 5, 3));