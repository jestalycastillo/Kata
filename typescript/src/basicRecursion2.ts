function recurse(n:number){
    if(n < 1) return;
    recurse(n - 1);
    console.log(n);
}

recurse(5);