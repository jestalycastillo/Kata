class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let count = 1;
    let curr = head;
    let prev = null;

    while(curr !== null){
        if(count === k) {
            count = 0;
            console.log(curr.val);
        }
        count++;
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }


    return prev;
};

reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2);