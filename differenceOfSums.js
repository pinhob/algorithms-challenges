// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
  let notDivisibleByM = 0;
  let divisibleByM = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m === 0) {
        divisibleByM += i;
    } else {
        notDivisibleByM += i;
    }
  }

  return notDivisibleByM - divisibleByM;
};
