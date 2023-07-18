// solution for 'The Hurdle Race' challenge: https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  const highestHurdle = height.sort((a, b) => b - a)[0];

  if (k >= highestHurdle) return 0;

  const numOfDoses = highestHurdle - k;

  return numOfDoses;
}