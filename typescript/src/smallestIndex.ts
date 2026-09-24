function smallestIndex(nums: number[]): number {
    let smallest = Infinity;
    for(let i = 0; i < nums.length; i++){
        let numStr = String(nums[i]);
        let bigNum = 0;
        for(let num of numStr){
            bigNum += Number(num);
        }
        if(bigNum === i && bigNum < smallest){
            smallest = bigNum;
        }
    }

    return smallest === Infinity ? -1 : smallest;
};

smallestIndex([18, 29, 38, 49, 50]);