// solution for Utopian Tree challenge: https://www.hackerrank.com/challenges/utopian-tree/

function utopianTree(n) {
  let treeHeight = 1;

  for (let i = 1; i <= n; i++) {
    const indexIsEven = i % 2 === 0;
    treeHeight = indexIsEven ? treeHeight + 1 : treeHeight * 2;
  }

  return treeHeight;
}
