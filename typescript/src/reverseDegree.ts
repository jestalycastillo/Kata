function reverseDegree(s: string): number {
    let res = 0;
    let revAlpha = "abcdefghijklmnopqrstuvwxyz".split("").reverse().join("");

    for(let i = 0; i < s.length; i++){
        let letterIndex = revAlpha.indexOf(s[i] ?? "") + 1;
        let product = letterIndex * (i + 1);
        res += product;
    }

    return res;
};

reverseDegree("abcde");