// solution for Square Every Digit challenge: https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  const squaredNums = num.toString().split('').map(n => Number(n) * Number(n));
  const result = Number(squaredNums.join(''));

  return result;
}
