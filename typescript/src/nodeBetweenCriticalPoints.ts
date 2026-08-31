
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    let preVal: number = head?.val ?? 0;
    let count: number = 1;
    let nums: number[] = [];

    while(head !== null){
        if((head.val < preVal && head.val < (head.next?.val ?? 0)) || (head.val > preVal && head.val > (head.next?.val ?? 0))) nums.push(count);
        count++;
        preVal = head.val;
        head = head.next;
    }

    if(nums.length <= 1) return [-1, -1];

    let res: number[] = [];
    let min: number = (nums[1] ?? 0) - (nums[0] ?? 0);
    for(let i = 0; i < nums.length - 1; i++){
        min = Math.min(min, (nums[i + 1] ?? 0) - (nums[i] ?? 0));
    }

    return [min, (nums[nums.length - 1] ?? 0) - (nums[0] ?? 0)];
};

nodesBetweenCriticalPoints(new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(2))))))));