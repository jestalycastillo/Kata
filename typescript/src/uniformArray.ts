function uniformArray(nums1: number[]): boolean {
    let smallestOdd = Infinity;
    let smallestEven = Infinity;
    for(let i = 0; i < nums1.length; i++){
        if(nums1[i] ?? 0 % 2 === 0){
            if(nums1[i] ?? 0 < smallestEven) smallestEven = nums1[i] ?? 0;
        }else{
            if(nums1[i] ?? 0 < smallestOdd) smallestOdd = nums1[i] ?? 0;
        }
    }

    let res = false;
    if(smallestEven < smallestOdd){
        res = convertToEvens(nums1, smallestOdd);
    }else{
        res = convertToOdds(nums1, smallestOdd);
    }

    return res;
};

function convertToEvens(nums1:number[], smallestOdd:number){
    for(let i = 0; i < nums1.length; i++){
        if(nums1[i] ?? 0 % 2 !== 0) {
            let res = nums1[i] ?? 0 - smallestOdd;
            if(res < 1) return false;
        }
    }

    return true;
}

function convertToOdds(nums1:number[], smallestOdd:number){
    for(let i = 0; i < nums1.length; i++){
        if(nums1[i] ?? 0 % 2 === 0) {
            let res = nums1[i] ?? 0 - smallestOdd;
            if(res < 1) return false;
        }
    }

    return true;
}

uniformArray([5,4,78,9,3,6,8]);