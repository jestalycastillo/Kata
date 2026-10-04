function recurse(n:number):number{
    if(n < 2) return 1;
    return n * recurse(n - 1);
}

console.log(recurse(5));