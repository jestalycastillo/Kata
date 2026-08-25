function missingMultiple(nums: number[], k: number): number {
    let divisibles:number[] = [];
    let smallest:number = k;
    for(let num of nums){
        if(num % k === 0) divisibles.push(num);
    }

    let temp:number = 0;
    while(true){
        temp += k;
        if(!divisibles.includes(temp)){
            smallest = temp;
            break;
        }
    }

    return smallest;
};

missingMultiple([3, 6, 9, 12], 3);