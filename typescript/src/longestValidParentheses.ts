function longestValidParentheses(s: string): number {
    if(s === "") return 0;
    let res = [];
    let invalidIndices = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] === ")"){
            if(res.pop() === "("){
                invalidIndices.pop(); 
            }else{
                invalidIndices.push(i);
            }
            continue;
        }
        
        res.push(s[i]);
        invalidIndices.push(i);
    }

    console.log(invalidIndices);

    let longest = 0;

    if(invalidIndices.length === 0) {
        return s.length;
    }

    let first = Math.abs(0 - (invalidIndices[0] ?? 0));
    let last = Math.abs(s.length - (invalidIndices[invalidIndices.length - 1] ?? s.length)) - 1;

    for(let i = 0; i < invalidIndices.length - 1; i++){
        let range = Math.abs((invalidIndices[i] ?? 0) - (invalidIndices[i + 1] ?? 0)) - 1;
        if(longest < range) longest = range;
    }

    return Math.max(...[first, last, longest]);
};

longestValidParentheses("(()");