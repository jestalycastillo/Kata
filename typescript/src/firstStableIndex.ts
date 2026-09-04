function firstStableIndex(nums: number[], k: number): number {
    let arr1:number[] = [];
    let arr2 :number[]= [...nums];
    let arr3:number[] = [];

    for(let i = 0; i < nums.length; i++){
        arr1.push(nums[i] ?? 0);
        let max = Math.max(...arr1);
        let min = Math.min(...arr2);
        let res = max - min;

        if(res <= k) return i;

        arr2.shift();
    }

    return -1;
};

firstStableIndex([1,2,3,4,5], 3);