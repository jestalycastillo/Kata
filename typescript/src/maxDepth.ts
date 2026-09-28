function maxDepth(s: string): number {
    let maxDep = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            count++;
            if(maxDep < count) maxDep = count;
        }else if(s[i] === ")"){
            count--;
        }
    }

    return maxDep;
};

maxDepth("(1+(2*3)+((8)/4))+1");