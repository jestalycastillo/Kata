function targetIndices(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if((nums[i] ?? 0) > (nums[j] ?? 0)){
                let temp = nums[i];
                nums[i] = nums[j] ?? 0;
                nums[j] = temp ?? 0;
            }
        }
    }

    let res = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== target && nums[i - 1] === target && i > 0){
            break;
        }
        if(target === nums[i]){
            res.push(i);
        }
    }

    return res;
};

targetIndices([1, 2, 5, 2, 3], 2);