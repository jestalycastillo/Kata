function reverse(x: number): number {
    let isNegative:boolean = x < 0 ? true : false;
    let numString:string = String(x);
    let reversed:string[] = [];
    for(let i = numString.length - 1; i >= 0; i--){
        if((i === numString.length - 1 && numString[i] === "0") || isNaN(Number(numString[i]))) continue;
        reversed.push(numString[i] ?? "");
    }
    let fin:string = isNegative ? "-" : "";
    let res:number = Number(fin.concat(...reversed));
    return res > (Math.pow(2, 31) - 1) || res < -(Math.pow(2, 31) - 1) ? 0 : res;
};

reverse(-1234);