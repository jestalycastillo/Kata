function mapWordWeights(words: string[], weights: number[]): string {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let res = "";
    for(let i = 0; i < words.length; i++){
        let val = 0;
        for(let ch of words[i] ?? ""){
            val += weights[alpha.indexOf(ch) ?? 0] ?? 0;

        }
        res += alpha[(alpha.length - val % 26) - 1];
    }

    return res;
};

mapWordWeights(["abc", "def"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);