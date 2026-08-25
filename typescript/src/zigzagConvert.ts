function convert(s: string, numRows: number): string {
    let rows:string[][] = [];
    let count:number = 0;
    let isReversed:boolean = false;

    if(numRows === 1) return s;

    for(let i = 0; i < numRows; i++){
        rows.push([]);
    }

    for(let i = 0; i < s.length; i++){
        if(count === numRows - 1) {
            isReversed = true;
        }else if(count === 0) {
            isReversed = false;
        }

        rows[count]?.push(s[i] ?? "");

        if(isReversed){ 
            count--;
        }
        else{ 
            count++;
        }
    }

    let merged:string[] = [];
    for(let i = 0; i < rows.length; i++){
        merged.push(...rows[i] ?? []);
    }

    let res = "";
    
    return res.concat(...merged);
};

convert("hello", 3);