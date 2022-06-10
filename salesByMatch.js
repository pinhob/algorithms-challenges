function sockMerchant(n, ar) {
  let pairsPerColor = {};

  for (let i = 0; i < n; i += 1) {
    let color = ar[i];

    if (!pairsPerColor[color]) {
      const repeteadSocks = ar.filter((num) => num === color).length;
      const numberOfPairs = parseInt(repeteadSocks / 2);
      pairsPerColor[color] = numberOfPairs;
    }
  }

  const total = Object.values(pairsPerColor).reduce((acc, val) => acc + val, 0);

  return total;
}
