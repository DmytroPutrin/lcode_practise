export function containsDuplicate(nums: number[]): boolean {
    const dict: Record<string, boolean> = {};
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        if (dict[nums[i]]) {
            return true;
        }

        dict[nums[i]] = true;
    }

    return false;
}