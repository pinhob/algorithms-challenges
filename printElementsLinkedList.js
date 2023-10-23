// solution for challenge: https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem?isFullScreen=true

function printLinkedList(head) {
  if (head === null) return;

  let current = head;

  while (current.next !== null) {
    console.log(current.data)
    current = current.next;
  }

  console.log(current.data);
}
