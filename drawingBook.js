// challenge: https://www.hackerrank.com/challenges/drawing-book/problem

function calculateTurnsFromEnd(n, p, isEven) {
  if (isEven) {
    n += 1;
  }

  return Math.floor((n - p) / 2);
}

function pageCount(n, p) {
  const turnsStartingFromBeginning = Math.floor(p / 2);
  const turnsStartingFromEnd = calculateTurnsFromEnd(n, p, n % 2 === 0);

  return turnsStartingFromBeginning < turnsStartingFromEnd ? turnsStartingFromBeginning : turnsStartingFromEnd;

}