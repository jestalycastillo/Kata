function lexGreaterPermutation(s: string, target: string): string {
    let str:string[] = [];

    for(let t of s){
        str.push(t);
    }

    let permutations:string[] = [];
    function backtrack(start:number){
        if(start === str.length){
            permutations.push(str.join().replaceAll(",", ""));
            return;
        }
        for(let i = start; i < str.length; i++){
            [str[start], str[i]] = [str[i] ?? "", str[start] ?? ""];
            backtrack(start + 1);
            [str[start], str[i]] = [str[i] ?? "", str[start] ?? ""];
        }
    }

    backtrack(0);

    let proceed:string[] = [];
    for(let p of permutations){
        if(target < p) {
            proceed.push(p);
        }
    }
    
    if(proceed.length === 0) return "";

    let smallest:string = proceed[0] ?? "";
    for (let s of proceed){
        if(s < smallest) smallest = s;
    }

    return smallest;
};

lexGreaterPermutation("abc", "bba");