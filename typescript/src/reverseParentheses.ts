function reverseParentheses(s: string): string {
    let res = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === ")"){
            let temp = "";
            while(res[res.length - 1] !== "("){
                temp += res.pop();
            }
            res.pop();
            res.push(...temp.split(""));
            continue;
        }
        res.push(s[i]);
    }

    return res.join("");
};

reverseParentheses("(abcd)");