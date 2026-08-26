function shortestBeautifulSubstring(s: string, k: number): string {
    let substrings:string[] = [];

    for(let i = 0; i < s.length; i++){
        let count = 0;
        for(let j = i; j < s.length; j++){
            if(s[j] === "1") count++;
            if(count === k){
                substrings.push(s.slice(i, j + 1));
                break;
            }
        }
    }

    if(substrings.length === 0) return "";

    let smallest:string = substrings[0] ?? "";
    for(let b of substrings){
        if(b.length < smallest.length) {
            smallest = b;
        } else if(b.length === smallest.length){
            if(smallest > b) smallest = b;
        };
    }

    return smallest;
};

shortestBeautifulSubstring("1001001110", 3);