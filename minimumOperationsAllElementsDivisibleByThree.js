// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let res = 0;

    const isDivisibleBy3 = (num) => num % 3 === 0;

    for (let num of nums) {
        if (!isDivisibleBy3(num) && (isDivisibleBy3(num + 1) || isDivisibleBy3(num - 1))) res++;
    }

    return res;
};
