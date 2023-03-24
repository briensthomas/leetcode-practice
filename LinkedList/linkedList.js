/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // if one of the lists is null, then we can just return the other list since they're pre-sorted
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    // we need a new container to iteratively pass the values into, though I'm not sure why we have to assign the intermediary?
    let outputList = new ListNode();
    let tail = outputList;

    // instead of a for/let loop, as long as there's a list1 and list 2, iterate through them.
    while (list1 && list2) {
        // if the value of the number from the next number in list1 is less than list2, assign the intermediary (outputList) to the value from list1, and also increment to the next value in list 1
        if (list1.val <= list2.val) {
            outputList.next = list1;
            list1 = list1.next
            // if the value of the number from list2 is lower, assign the outputList value to the list2 value, and increment to the next value
        } else if (list2.val < list1.val) {
            outputList.next = list2;
            list2 = list2.next
        }
        // at the end of the loop, move on to the next value in the outputList
        outputList = outputList.next;
    }
    // I have no clue what this is for. Maybe it allows you to assign the .next value to either list? I'm not sure how this is different from the while loop, but without it it doesn't add in the final value from one list.
    outputList.next = list1 || list2;
    // the initial value of the tail will be 0 on creation, so returning tail.next starts the return from the first number passed from list1/list2
    return tail.next;
};

// Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Just learned about "Floyd's Tortoise & Hare" where you set a "fast" and a "slow" pointer to iterate through the linkedList, and if at any point the slow pointer is equal to the fast pointer, you have a cycle.
var hasCycle = function(head) {
    let [slowPointer, fastPointer] = [head, head]

    // then, we set a while loop, because we only want this function to run while there is a fastPointer, and a value for next that is not null

    while (fastPointer && fastPointer.next) {
        // Then, you want to actually dictate how these pointers behave, by setting them to the next value in the list
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if (slowPointer === fastPointer) return true;
    }
    return false;
    
};

