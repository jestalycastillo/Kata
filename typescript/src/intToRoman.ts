function intToRoman(num: number): string {
    let map = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    let res = [];

    let iCount = 0;
    let xCount = 0;
    let cCount = 0;
    

    while(num > 0){
        if(num >= 1000){
            num -= map.get("M") ?? 0;
            res.push("M");
            continue;
        }else if(num >= 500 && num <= 999){
            if(num >= 900){
                num -= (map.get("M") ?? 0) - (map.get("C") ?? 0);
                res.push("C");
                res.push("M");
                continue;
            }
            num -= map.get("D") ?? 0;
            res.push("D");
            continue;
        } else if(num >= 100 && num <= 499){
            num -= map.get("C") ?? 0;
            res.push("C");
            cCount++;

            if(cCount === 4){
                while(cCount  > 1){
                    res.pop();
                    cCount--;
                }
                res.push("D");
            }
            continue;
        } else if(num >= 50 && num <= 99){
            if(num >= 90){
                num -= (map.get("C") ?? 0) - (map.get("X") ?? 0);
                res.push("X");
                res.push("C");
                continue;
            }
            num -= map.get("L") ?? 0;
            res.push("L");
            continue;
        } else if(num >= 10 && num <= 49){
            num -= map.get("X") ?? 0;
            res.push("X");
            xCount++;

            if(xCount === 4){
                while(xCount  > 1){
                    res.pop();
                    xCount--;
                }
                res.push("L");
            }
            continue;
        } else if(num >= 5 && num <= 9){
            if(num === 9){
                num -= (map.get("X") ?? 0) - (map.get("I") ?? 0);
                res.push("I");
                res.push("X");
                continue;
            }
            num -= map.get("V") ?? 0;
            res.push("V");
            continue;
        } else{
            num -= map.get("I") ?? 0;
            res.push("I");
            iCount++;

            if(iCount === 4){
                while(iCount  > 1){
                    res.pop();
                    iCount--;
                }
                res.push("V");
            }
        }
    }

    return res.join("");
};

intToRoman(1994); // "MCMXCIV"