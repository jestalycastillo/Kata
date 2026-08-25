function threeSum(nums: number[]): number[][] {
    let triplets:number[][] = [];
    let i:number = 0;
    let left:number = i + 1;
    let right:number = left + 1;

    while(i < nums.length - 2){
        if(((nums[i] ?? 0) + (nums[left] ?? 0) + (nums[right] ?? 0)) === 0 && ((i !== left) && (i !== right) && (left !== right))) {
            let includes:boolean = false;
            let numCount:number = 0;
            for(let arr of triplets){
                let tempArr:number[] = [nums[i] ?? 0, nums[left] ?? 0, nums[right] ?? 0];

                tempArr.sort();
                arr.sort();

                if(arr[0] === tempArr[0] && arr[1] === tempArr[1] && arr[2] === tempArr[2]) {
                    includes = true;
                    break;
                }
            }
            if (!includes) triplets.push([nums[i] ?? 0, nums[left] ?? 0, nums[right] ?? 0]);
        }

        right++;

        if(right >= nums.length){
            left++;
            right = left + 1;
        }

        if(left >= nums.length - 1){
            i++;
            left = i + 1;
            right = left + 1;
        }
    }
    return triplets;
};