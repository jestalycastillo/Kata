function minAddToMakeValid(s: string): number {
  let stack = [];
  for(let ch of s){
    if(ch === ")"){
        if(stack[stack.length - 1] === "(") {
            stack.pop();
            continue;
        }
    }
    stack.push(ch);
  }
  return stack.length;
};

minAddToMakeValid("())");