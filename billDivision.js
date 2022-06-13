// challenge: https://www.hackerrank.com/challenges/bon-appetit/

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  // Write your code here
  const annaDoenstEat = bill[k];
  let total = 0;

  // const totalSplittedBill = parseInt(bill.filter(item => item !== annaDoenstEat).reduce((acc, val) => acc + val, 0) / 2);

  // for(let i = 0; i < bill.length; i += 1) {
  //   if (bill[i] !== annaDoenstEat) {
  //     total += bill[i];
  //   }
  // }

  bill.forEach(item => total += item);

  const totalSplittedBill = parseInt((total - annaDoenstEat) / 2)

  b == totalSplittedBill
    ? console.log('Bon Appetit')
    : console.log(b - totalSplittedBill)
}