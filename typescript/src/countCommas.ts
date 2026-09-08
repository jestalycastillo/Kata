function countCommas(n: number): number {
    return n >= 1000 ? n - 1000 + 1 : 0;   
};

countCommas(25964);