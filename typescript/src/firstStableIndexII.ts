function firstStableIndex(nums: number[], k: number): number {
    let suffArr = new Array(nums.length);
    suffArr[nums.length - 1] = nums[nums.length - 1];
    let max = nums[0];

    for(let i = nums.length - 2; i >= 0; i--){
        suffArr[i] = Math.min(nums[i] ?? 0, suffArr[i + 1]);
    }

    for(let i = 0; i < nums.length; i++){
        max = Math.max(max ?? 0, nums[i] ?? 0);

        if(max - suffArr[i] <= k) return i;
    }

    return -1;
};  

firstStableIndex([1,2,3,4,5], 3);