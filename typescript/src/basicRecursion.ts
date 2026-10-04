function recurse(n:number){
    if(n < 1) return;
    console.log(n);
    recurse(n - 1);
}

recurse(5);