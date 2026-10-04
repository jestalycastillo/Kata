function recurse(n: number):number {
    if(n < 1) return 0;

    return n + recurse(n - 1);
}

console.log(recurse(5));