function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // [6,20,45,89] [50,58,91]
    for(let num of nums2){
        nums1.push(num);
    }

    nums1.sort((a,b) => a - b);
    
    let len:number = nums1.length;
    let res:number = 0;
    if (len % 2 === 0) {
        res = ((nums1[(len / 2) - 1] ?? 0) + (nums1[len / 2] ?? 0)) / 2;
    }else{
        res = nums1[(len - 1) / 2] ?? 0;
    }

    return res;
};

console.log(findMedianSortedArrays([],[]));