function minimumDeletions(nums: number[]): number {
    if(nums.length === 1) return 1;
    let fromLeftRight:number[] = [];
    let minIndex:number = nums.indexOf(Math.min(...nums));
    let maxIndex:number = nums.indexOf(Math.max(...nums));

    let fromLeft = (maxIndex < minIndex ? minIndex : maxIndex) + 1;

    let fromRight = minIndex < maxIndex && minIndex < nums.length ? Math.abs(minIndex - nums.length) : Math.abs(maxIndex - nums.length);

    let front:number = 0;
    let back:number = nums.length - 1;

    if(Math.abs(minIndex - front) < Math.abs(minIndex - back)) {
        fromLeftRight.push(Math.abs(minIndex - front) + 1);
    } else {
        fromLeftRight.push(Math.abs(minIndex - back) + 1);
    }

    if(Math.abs(maxIndex - front) < Math.abs(maxIndex - back)) {
        fromLeftRight.push(Math.abs(maxIndex - front) + 1);
    } else {
        fromLeftRight.push(Math.abs(maxIndex - back) + 1);
    }

    return Math.min(fromLeft, fromRight, (fromLeftRight[0] ?? 0) + (fromLeftRight[1] ?? 0));
};