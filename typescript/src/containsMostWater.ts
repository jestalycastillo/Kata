function maxArea(height: number[]): number {
    let left:number = 0;
    let right:number = height.length - 1;
    let maxArea:number = 0;
    while(left < right){
        let distance = right - left;
        let heightLeft:number = height[left] ?? 0;
        let heightRight:number = height[right] ?? 0;
        let currArea = distance * (heightLeft < heightRight ? heightLeft : heightRight);
        maxArea = maxArea > currArea ? maxArea : currArea;

        if(heightLeft < heightRight){
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};