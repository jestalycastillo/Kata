function firstStableIndex(nums: number[], k: number): number {
    let arr1:number[] = [];
    let arr2 :number[]= [...nums];
    let arr3:number[] = [];

    for(let i = 0; i < nums.length; i++){
        arr1.push(nums[i] ?? 0);
        let max = Math.max(...arr1);
        let min = Math.min(...arr2);
        let res = max - min;

        arr2.shift();
        arr3.push(res);
    }

    for(let i = 0; i < arr3.length; i++){
        if(arr3[i] ?? 0 <= k) return i;
    }

    return -1;
};

firstStableIndex([1,2,3,4,5], 3);