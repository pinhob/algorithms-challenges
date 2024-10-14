// https://leetcode.com/problems/maximal-score-after-applying-k-operations/
var maxKelements = function(nums, k) {
  // class of queue/heap structure imported by Leetcode
  const heap = new Max PriorityQueue({ compare: (a, b) => b - a });
  
  for (const num of nums) {
    heap.enqueue(num);
  }

  let score = 0;

  while(k) {
    const ele = heap.dequeue();
    score += ele;
    heap.enqueue(Math.ceil(ele / 3));
    k--;
  }

  return score;
}
