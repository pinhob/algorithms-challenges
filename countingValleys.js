// CHALLENGE: https://www.hackerrank.com/challenges/counting-valleys/
// minha solução, que não passa em todos os testes por limite de tempo excedido:
function countingValleys(steps, path) {
  let hike = [];
  let total = 0;

  for (let step = 0; step < steps; step += 1) {
    hike.push(path[step] == 'U' ? 1 : -1);

    const walkedPath = hike.reduce((acc, val) => acc + val, 0);

    console.log((walkedPath - hike[step]) < 0, walkedPath - hike[step], path[step])

    if (walkedPath >= 0 && (walkedPath - hike[step]) < 0) {
      total += 1;
    }
  }

  return total;
}

// solução com base em: https://www.youtube.com/watch?v=cYQymqrxlfc
function countingValleys(steps, path) {
  let valleys = 0;
  let elevation = 0;

  for (let step = 0; step < steps; step += 1) {
    if (path[step] == 'U') {
      if (elevation < 0) {
        valleys += 1;
      }
      elevation += 1;
    } else {
      elevation -= 1;
    }
  }

  return valleys;
}