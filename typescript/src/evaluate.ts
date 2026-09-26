function evaluate(s: string, knowledge: string[][]): string {
    let map = new Map<string, string>(knowledge as [string, string][]);
    let res = "";
    let count = 0;
    while(count < s.length){
        if(s[count] === "("){
            let key = "";
            for(let j = count + 1; j < s.length; j++){
                if(s[j] === ")"){
                    count = j;
                    break;
                }
                key += s[j];
            }

            if(!map.get(key)){
                res += "?";
            }else{
                res += map.get(key);
            }
        }
        if(s[count] !== ")") res += s[count];
        count++;
    }

    return res;
};

evaluate("(name)is(age)yearsold", [["name","bob"],["age","two"]]);