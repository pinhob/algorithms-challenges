// solution for 'nsert a Node at the Tail of a Linked List' challenge: https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem?isFullScreen=true

function insertNodeAtTail(head, data) {
  const node = new SinglyLinkedListNode(data)

  if (head == null) {
    head = node;
  } else {
    let current = head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
  }

  return head;
}
