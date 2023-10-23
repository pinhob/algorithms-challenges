// solution for Arrays - DS challenge: https://www.hackerrank.com/challenges/arrays-ds/problem
// or: const reverseArray = (a) => a.reverse();
function reverseArray(a) {
  let reverseArr = [];

  for (let i = a.length - 1; i >= 0; i--) {
    reverseArr.push(a[i]);
  }

  return reverseArr;
}