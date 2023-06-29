// challenge: https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  let totalValue = -1;

  keyboards.forEach(kValue => {
    drives.forEach(dValue => {
      const sum = kValue + dValue;

      if (sum <= b && sum > totalValue) {
        totalValue = sum;
      }
    })
  });

  return totalValue;
};
