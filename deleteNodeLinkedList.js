// resolution for challenge: https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/

function deleteNode(llist, position) {
    // Write your code here
    if (llist === null) return llist;
    if (position === 0) return llist.next;
    
    let index = 0;
    let currentNode = llist; 
    
    while (index < position - 1) {
        currentNode = currentNode.next;
        index++;
    } 
    
    currentNode.next = currentNode.next.next;
    
    return llist
}
