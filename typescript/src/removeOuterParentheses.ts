function removeOuterParentheses(s: string): string {
    let idx = [];
    let stack = [];
    let count = 0;
    
    while(count < s.length){
        if(stack[stack.length - 1] === "(" && s[count] === "("){
            let stack2 = [];
            let count2 = count;
            while(stack[stack.length - 1] === "("){
                if(s[count2] === ")"){
                    if(stack2[stack2.length - 1] === "("){
                        stack2.pop();
                        count2++;
                        continue;
                    }else{
                        if(stack[stack.length - 1] === "(" && s[count2] === ")"){
                            idx.push(count - 1);
                            idx.push(count2);
                            count = count2;
                            break;
                        }
                    }
                }
                stack2.push(s[count2]);
                count2++;
            }
        }else if(s[count] === ")"){
            if(stack[stack.length - 1] === "("){
                idx.push(count - 1);
                idx.push(count);
                stack.pop();
                continue;
            }
        }
        stack.push(s[count]);
        count++;
    }

    let res = "";
    for(let i = 0; i < s.length; i++){
        if(!idx.includes(i)) res += s[i];
    }

    return res;
};

removeOuterParentheses("(()())(())(()(()))");