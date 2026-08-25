function checkDivisibility(n: number): boolean {
    let stringNum:string = String(n);
    let sum:number = 0;
    let product:number = 1;
    for(let c of stringNum){
        let num = Number(c);
        sum += num;
        product *= num;
    }
    let total = sum + product;
    return n % total === 0 ? true : false;
};

console.log(checkDivisibility(123456));