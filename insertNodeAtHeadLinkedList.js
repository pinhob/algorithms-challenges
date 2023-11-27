// challenge: https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem

function insertNodeAtHead(head, data) {
  const node = new SinglyLinkedListNode();
  node.data = data;
  node.next = head;
  head = node;
  return head;
}