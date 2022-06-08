function getTotalX(a, b) {
  // Write your code here
  let numbers = 0;

  for (let between = a[a.length - 1]; between <= b[0]; between += 1) {
    const checkFirstArr = a.filter(num => between % num === 0);
    const checkSecondArr = b.filter(num => num % between === 0);


    if ((checkFirstArr.length === a.length) && (checkSecondArr.length === b.length)) {
      numbers += 1;
    }
  }

  return numbers;
}

console.log(getTotalX([2, 4], [16, 32, 96]))


/*
Solução charmosa criada por outro usuário do Hackerrank (https://www.hackerrank.com/challenges/between-two-sets/forum/comments/488585):
function getTotalX(a, b) {
    let validCount = 0;
    
    for (let x = 1; x <= 100; x++) {
        if (a.every(int => (x % int == 0))) {
            if (b.every(int => (int % x == 0))) {
                validCount++;
            }
        }
    }

    return validCount;
}
*/
