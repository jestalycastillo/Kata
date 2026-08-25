function lengthOfLongestSubstring(s: string): number {
    let temp:string[] = [];
    let highestLen:number = 0;

    if(s.length === 1) return 1;
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            if(!temp.includes(s[j] ?? "")){
                temp.push(s[j] ?? "");
            } else{
                highestLen = temp.length > highestLen ? temp.length : highestLen;
                temp = [];
                break;
            }
        }
    }

    return highestLen;
};

lengthOfLongestSubstring("hello world");