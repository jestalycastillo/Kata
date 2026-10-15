function sumCounts(nums: number[]): number {
    let sum = 0;
    //1 2 1
    for(let i = 0; i < nums.length; i++){
        let set = new Set();
        let arr = [];
        for(let j = i; j < nums.length; j++){
            if(!set.has(nums[j])){
                arr.push(nums[j]);
                set.add(nums[j]);
            }
            sum += Math.pow(arr.length, 2);
        }
    }

    return sum;
};

sumCounts([1, 2, 1]);