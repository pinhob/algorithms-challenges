// from: https://neetcode.io/problems/two-integer-sum-ii

// O(n)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
*/
twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        const sum = numbers[l] + numbers[r];

        if (sum === target) {
            return [l + 1, r + 1];
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }
}
